export interface Job {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: Requirements;
    role: Requirements;
  }
  
  interface Requirements {
    content: string;
    items: string[];
  }
  export interface JobsState {
    jobs: Job[];
    filteredJobs: Job[];
    selectedJob: Job | null;
  }
  
  export enum ActionType {
    SET_JOBS = 'SET_JOBS',
    FILTER_JOBS = 'FILTER_JOBS',
    SELECT_JOB = 'SELECT_JOB',
  }
  
  export interface SetJobsAction {
    type: ActionType.SET_JOBS;
    payload: Job[];
  }
  
  export interface FilterJobsAction {
    type: ActionType.FILTER_JOBS;
    payload: string;
  }

  
  // Add the SelectJobAction interface
  export interface SelectJobAction {
    type: ActionType.SELECT_JOB;
    payload: Job | null;
  }
  
  // Add the new action to the JobsAction union type
  export type JobsAction = SetJobsAction | FilterJobsAction | SelectJobAction;
