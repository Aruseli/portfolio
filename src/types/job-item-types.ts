export interface Badge { 
  id: string; 
  name: string; 
} 
export interface Stack<T> { 
  id: string; 
  name: string; icon: T; 
} 
export interface JobDescription<T> { 
  description: string; 
  badges?: Badge[]; 
  stack?: Stack<T>[]; 
} 
export interface JobTitle<T> { 
  jobTitle: string; 
  projectName: string; 
  startDate?: string; 
  endDate?: string; 
  libraryName?: string; 
  hardSkills?: JobDescription<T>; 
  softSkills?: string; 
}