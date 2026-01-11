import fs from 'fs/promises';
import path from 'path';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface JourneyEntry {
  id: string;
  date: string;
  title: string;
  description: string;
}

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'content/projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getJourneyEntries(): Promise<JourneyEntry[]> {
  const filePath = path.join(process.cwd(), 'content/journey.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const entries = JSON.parse(fileContents);
  return entries.sort((a: JourneyEntry, b: JourneyEntry) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

