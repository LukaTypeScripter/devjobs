import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function SpecificJobs() {
    const filteredspecificJob = useSelector((state: RootState) => state.jobs.selectedJob);
  return (
    <div>SpecificJobs</div>
  )
}

export default SpecificJobs