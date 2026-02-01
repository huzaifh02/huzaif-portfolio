#!/bin/bash

# Portfolio Deployment Script - S3 + CloudFront
# Usage: ./deploy.sh
# 
# This script:
# 1. Builds the Next.js application
# 2. Syncs static files to S3
# 3. Invalidates CloudFront cache

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Portfolio Deployment to AWS S3 + CloudFront${NC}"
echo "=========================================="
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ Error: AWS CLI is not installed${NC}"
    echo "   Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ Error: AWS credentials not configured${NC}"
    echo "   Run: aws configure"
    exit 1
fi

# Check if Terraform is installed (needed to get outputs)
if ! command -v terraform &> /dev/null; then
    echo -e "${RED}❌ Error: Terraform is not installed${NC}"
    echo "   Install it from: https://www.terraform.io/downloads"
    exit 1
fi

# Check if we're in the project root
if [ ! -f "package.json" ] || [ ! -f "next.config.ts" ]; then
    echo -e "${RED}❌ Error: Please run this script from the project root directory${NC}"
    exit 1
fi

# Check if terraform directory exists
if [ ! -d "terraform" ]; then
    echo -e "${RED}❌ Error: terraform directory not found${NC}"
    exit 1
fi

# Step 1: Build Next.js application
echo -e "${BLUE}📦 Step 1: Building Next.js application...${NC}"
npm run build

if [ ! -d "out" ]; then
    echo -e "${RED}❌ Error: Build failed - 'out' directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build complete${NC}"
echo ""

# Step 2: Get infrastructure details from Terraform
echo -e "${BLUE}📊 Step 2: Getting infrastructure details from Terraform...${NC}"
cd terraform

# Check if terraform is initialized
if [ ! -d ".terraform" ]; then
    echo -e "${YELLOW}⚠️  Terraform not initialized. Initializing...${NC}"
    terraform init
fi

# Get outputs
S3_BUCKET=$(terraform output -raw s3_bucket_name 2>/dev/null || echo "")
CF_DIST_ID=$(terraform output -raw cloudfront_distribution_id 2>/dev/null || echo "")

if [ -z "$S3_BUCKET" ] || [ -z "$CF_DIST_ID" ]; then
    echo -e "${RED}❌ Error: Could not get Terraform outputs${NC}"
    echo "   Make sure infrastructure is deployed: cd terraform && terraform apply"
    exit 1
fi

echo -e "${GREEN}✅ Found S3 bucket: ${S3_BUCKET}${NC}"
echo -e "${GREEN}✅ Found CloudFront distribution: ${CF_DIST_ID}${NC}"
echo ""

cd ..

# Step 3: Sync files to S3
echo -e "${BLUE}📤 Step 3: Uploading files to S3...${NC}"

# Upload static assets (JS, CSS, images) with long cache
echo "   Uploading static assets (long cache)..."
aws s3 sync out/ s3://$S3_BUCKET/ \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt" \
  --cache-control "public, max-age=31536000, immutable" \
  --delete \
  --quiet

# Upload HTML files with short cache (for immediate updates)
echo "   Uploading HTML files (short cache)..."
aws s3 sync out/ s3://$S3_BUCKET/ \
  --exclude "*" \
  --include "*.html" \
  --include "*.xml" \
  --include "*.txt" \
  --cache-control "public, max-age=0, must-revalidate" \
  --delete \
  --quiet

echo -e "${GREEN}✅ Upload complete${NC}"
echo ""

# Step 4: Invalidate CloudFront cache
echo -e "${BLUE}🔄 Step 4: Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $CF_DIST_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo -e "${GREEN}✅ Cache invalidation created: ${INVALIDATION_ID}${NC}"
echo ""

# Get website URL
cd terraform
WEBSITE_URL=$(terraform output -raw website_url 2>/dev/null || echo "")
cd ..

# Success message
echo "=========================================="
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo -e "${BLUE}📋 Deployment Summary:${NC}"
echo "   🌐 Website URL: ${WEBSITE_URL}"
echo "   📦 S3 Bucket: ${S3_BUCKET}"
echo "   ☁️  CloudFront ID: ${CF_DIST_ID}"
echo "   🔄 Invalidation ID: ${INVALIDATION_ID}"
echo ""
echo -e "${YELLOW}⏳ Note: CloudFront invalidation may take 1-2 minutes to complete${NC}"
echo -e "${YELLOW}   Your changes will be live once the invalidation finishes${NC}"
echo ""
