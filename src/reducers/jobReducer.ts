
// src/reducers/jobsReducer.ts
import { JobsAction, JobsState, ActionType } from '../types';

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  selectedJob: null,
};

const jobsReducer = (state = initialState, action: JobsAction): JobsState => {
  switch (action.type) {
    case ActionType.SET_JOBS:
      return { ...state, jobs: action.payload, filteredJobs: action.payload };
    case ActionType.FILTER_JOBS:
      const searchTerm = action.payload.toLowerCase();
      const filteredJobs = state.jobs.filter(
        (job) =>
          job.position.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm)
      );
      return { ...state, filteredJobs };
      case ActionType.SELECT_JOB:
        return {...state,selectedJob:action.payload}
    default:
      return state;
  }
};

export default jobsReducer;