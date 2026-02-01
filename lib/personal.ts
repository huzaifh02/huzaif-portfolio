import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

export interface PersonalData {
  personal_interests: {
    sports: {
      football: {
        description: string;
        experience: string[];
        passion_level: string;
      };
    };
    hobbies: {
      chess: {
        description: string;
        platform: string;
        rating: number;
        skill_level: string;
      };
    };
    location: {
      current_location: string;
      connection_to_location: string;
    };
    outdoor_activities: {
      trekking: {
        description: string;
        experience: string[];
        interest: string;
        frequency: string;
      };
    };
  };
}

export async function getPersonalData(): Promise<PersonalData> {
  const filePath = path.join(process.cwd(), 'personal/personal.yaml');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return yaml.load(fileContents) as PersonalData;
}
