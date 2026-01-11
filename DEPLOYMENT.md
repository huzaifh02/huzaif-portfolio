# AWS Deployment Guide

This portfolio website can be deployed to AWS using several methods. Below are the recommended approaches:

## Option 1: AWS Amplify (Recommended - Easiest)

AWS Amplify is the simplest way to deploy a Next.js application to AWS.

### Steps:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to AWS Amplify:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository
   - Select your branch (usually `main` or `master`)

3. **Configure build settings:**
   - Amplify will auto-detect Next.js
   - The `amplify.yml` file in the root will be used for build configuration
   - Review and confirm the build settings

4. **Deploy:**
   - Click "Save and deploy"
   - Amplify will build and deploy your application
   - Your site will be available at `https://<app-id>.amplifyapp.com`

5. **Custom Domain (Optional):**
   - In Amplify Console, go to "Domain management"
   - Add your custom domain
   - Follow the DNS configuration steps

## Option 2: AWS Lambda + API Gateway (Serverless)

For server-side rendering with Next.js, you can use AWS Lambda with the Serverless Next.js Component.

### Prerequisites:
- AWS CLI configured
- Serverless Framework installed

### Steps:

1. **Install Serverless Next.js Component:**
   ```bash
   npm install -g serverless
   ```

2. **Create `serverless.yml`:**
   ```yaml
   myNextApplication:
     component: "@sls-next/serverless-component@latest"
   ```

3. **Deploy:**
   ```bash
   serverless
   ```

## Option 3: Static Export + S3 + CloudFront

For a fully static site, you can export Next.js as static files and host on S3 with CloudFront.

### Steps:

1. **Update `next.config.ts` to enable static export:**
   ```typescript
   output: 'export'
   ```

2. **Build and export:**
   ```bash
   npm run build
   ```
   This creates an `out` directory with static files.

3. **Upload to S3:**
   - Create an S3 bucket
   - Enable static website hosting
   - Upload the `out` directory contents

4. **Configure CloudFront:**
   - Create a CloudFront distribution
   - Point to your S3 bucket
   - Configure caching and SSL certificate

## Environment Variables

If you need environment variables:

1. **In AWS Amplify:**
   - Go to "App settings" → "Environment variables"
   - Add your variables

2. **In Lambda/Serverless:**
   - Add to `serverless.yml` or AWS Lambda environment configuration

## Build Commands

The project uses standard Next.js build commands:
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run dev` - Development server

## Notes

- The `amplify.yml` file is configured for AWS Amplify
- For static exports, you may need to adjust the build output configuration
- Ensure all dependencies are listed in `package.json`
- Test the production build locally with `npm run build && npm run start`

