
import { Job, ActionType, SetJobsAction, FilterJobsAction, SelectJobAction } from '../types';

export const setJobs = (jobs: Job[]): SetJobsAction => ({
  type: ActionType.SET_JOBS,
  payload: jobs,
});

export const filterJobs = (searchTerm: string): FilterJobsAction => ({
  type: ActionType.FILTER_JOBS,
  payload: searchTerm,
});

export const selectJob = (job: Job | null): SelectJobAction => ({
    type: ActionType.SELECT_JOB,
    payload: job,
  });
  export const toggleFullTimeOnly = () => {
    return {
      type: ActionType.TOGGLE_FULL_TIME_ONLY,
    };
  };
  
  export const selectLocation = (location: string | null) => {
    return {
      type: ActionType.SELECT_LOCATION,
      payload: location,
    };
  };
