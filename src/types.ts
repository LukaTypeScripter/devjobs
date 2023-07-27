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
    showFullTimeOnly:boolean;
    selectedLocation: string | null;
  }
  
  export enum ActionType {
    SET_JOBS = 'SET_JOBS',
    FILTER_JOBS = 'FILTER_JOBS',
    SELECT_JOB = 'SELECT_JOB',
    TOGGLE_FULL_TIME_ONLY = 'TOGGLE_FULL_TIME_ONLY',
    SELECT_LOCATION = 'SELECT_LOCATION',
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
  interface ToggleFullTimeOnlyAction {
    type: ActionType.TOGGLE_FULL_TIME_ONLY;
  }
  
  interface SelectLocationAction {
    type: ActionType.SELECT_LOCATION;
    payload: string | null;
  }
  // Add the new action to the JobsAction union type
  export type JobsAction = SetJobsAction | FilterJobsAction | SelectJobAction | ToggleFullTimeOnlyAction | SelectLocationAction;
