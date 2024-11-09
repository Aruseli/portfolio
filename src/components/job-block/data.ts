import { JobDescription, JobTitle } from "@/types/job-item-types";

export type IconType = string | any; 
const exampleJob: JobDescription<IconType> = { 
  description: 'Senior Developer', 
  badges: [
    { id: '1', name: 'JavaScript' }, 
    { id: '2', name: 'TypeScript' }, 
  ], 
  stack: [ 
    { id: '1', name: 'React', icon: 'React Icon' }, 
    { id: '2', name: 'Node.js', icon: null }, 
  ], 
}; 
export const exampleJobTitle: JobTitle<IconType> = { 
  jobTitle: 'Lead Developer', 
  projectName: 'Awesome Project', 
  startDate: '2022-01-01', 
  endDate: '2023-01-01', 
  libraryName: 'React Library', 
  hardSkills: exampleJob, 
  softSkills: 'Leadership, Communication', 
};