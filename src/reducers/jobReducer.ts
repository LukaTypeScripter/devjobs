
import { JobsAction, JobsState, ActionType } from '../types';

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  selectedJob: null,
  showFullTimeOnly: true,
  selectedLocation: null,
};

const jobsReducer = (state = initialState, action: JobsAction): JobsState => {
  switch (action.type) {
    case ActionType.SET_JOBS:
      return { ...state, jobs: action.payload, filteredJobs: action.payload };
    case ActionType.FILTER_JOBS:
      const searchTerm = action.payload.toLowerCase();
      const filteredJobs = state.jobs.filter((job) => {
        const isMatch =
          job.position.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm);

        const isFullTime =
          state.showFullTimeOnly && job.contract.toLowerCase() === 'full time';

        const isSelectedLocation =
          !state.selectedLocation || job.location === state.selectedLocation;

        return isMatch && (!state.showFullTimeOnly || isFullTime) && isSelectedLocation;
      });
      return { ...state, filteredJobs };
      case ActionType.SELECT_JOB:
        return {...state,selectedJob:action.payload}
        case ActionType.TOGGLE_FULL_TIME_ONLY:
          return {...state,showFullTimeOnly:!state.showFullTimeOnly}
          case ActionType.SELECT_LOCATION:
            return { ...state, selectedLocation: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;