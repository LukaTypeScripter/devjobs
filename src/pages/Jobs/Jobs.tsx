
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs, filterJobs, selectJob } from '../../actions/jobActions';
import { data } from '../../data';
import { RootState } from '../../store';
import { Job } from '../../types';
import Header from '../../components/header/Header';
import DarkModeContext from '../../contexts/Theme';
import styled from 'styled-components';
import { iconCheck, iconLocation, iconSearch } from '../../assets/desktop';
import Button from '../../components/Button';
import Cards from '../../components/cards/Cards';

function Jobs() {
    const dispatch = useDispatch();
    const Jobs = useSelector((state: RootState) => state.jobs);
    const JobsFiltered = useSelector((state: RootState) => state.jobs.filteredJobs);
    const [fullTimeOnly, setFullTimeOnly] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    useEffect(() => {
      const fetchJobsData = () => {
        dispatch(setJobs(data));
      };
      fetchJobsData();
    }, [dispatch]);
    const handleFilter = () => {
      dispatch(filterJobs(searchTerm.toLowerCase())); 
    };
    const handleJobClick = (job: Job) => {
      dispatch(selectJob(job));
      console.log(job);
      
    };
   const {switchTheme,theme} = useContext(DarkModeContext)



  return (
    <>
    <Header switchTheme={switchTheme} theme={theme}/>
    <HomePage fullTimeOnly={fullTimeOnly}>
        <div className='header__filter'>
          <section className='fillter__bar'>
            <section className='section__fillter'>
              <input type="text" name="search" className='search__inp' placeholder="Filter by title, companies, expertise…" autoComplete="off" onChange={(e) => setSearchTerm(e.target.value)} />
              <input type="text" className='global' autoComplete="off" placeholder="Filter by title, companies, expertise…" />
              <select name="" id="" className='selection'>
              <option value="false">Filter by location…</option>
              {Jobs.jobs.map((job) => {
                  return (
                    <option key={job.id} value="false">{job.location}</option>
                  )
              }
                 
              )}
              </select>
              <label className='fillter__fulltime'>
                <input type="checkbox"  className='none'  checked={fullTimeOnly}
    onChange={(e) => setFullTimeOnly(e.target.checked)}/>
                <span className='check'>
                  Full Time
                <span>&nbsp;Only</span>
                </span>
              </label>
              <Button Text='Search' onClick={ handleFilter}/>
            </section>
          </section>
        </div>
          <Cards jobs={JobsFiltered} handleJobClick={handleJobClick} />
        
    </HomePage>

    </>
  )
}
const HomePage = styled.section<{fullTimeOnly:boolean}>`
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header__filter {
    width: 100%;
    display: flex;
    justify-content: center;
    .fillter__bar {
      width: 100%;
    max-width: 1158px;
    padding: 0 20px;
    margin-bottom: 45px;
    }
    .section__fillter{
      width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background-color: var(--filters-bg-color);
    border-radius: 6px;
    overflow: hidden;
    }
.search__inp {
    flex: 2;
    padding: 32px 32px 32px 56px;
    background-color: var(--filters-bg-color);
    background-image: url(${iconSearch});
    background-position: left 24px center;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-family: Kumbh Sans,sans-serif;
    border: none;
    appearance: none;
    outline: none;
    border-right: 1px solid rgba(110,128,152,.2);
    cursor: pointer;

}
    }
.global {
  display: none;
    flex: 1;
    padding: 32px 24px;
    min-width: 10px;
    background-color: var(--filters-bg-color);
    color: var(--text-color);
    font-family: Kumbh Sans,sans-serif;
    border: none;
    appearance: none;
    outline: none;
    cursor: pointer;

}
.selection {
    flex: 1;
    padding: 32px 32px 32px 56px;
    background-color: var(--filters-bg-color);
    background-image: url(${iconLocation});
    background-position: left 24px center;
    background-size: 16px 24px;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-family: Kumbh Sans,sans-serif;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-right: 1px solid rgba(110,128,152,.2);
    cursor: pointer;
    color: var(--placeholder-color);
}
.fillter__fulltime {
  margin-left: 32px;
    margin-right: 26px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    span {
      position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    font-weight: 700;
    flex-shrink: 0;
    }
    .check::before {
      content: "";
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background-color: var(--checkbox-bg-color);
    border-radius: 3px;
    }
    .check::after {
      position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "";
    width: 24px;
    height: 24px;
    background-image: url(${iconCheck});
    background-size: 12px 10px;
    background-position: 50%;
    background-repeat: no-repeat;
    opacity: ${props => props.fullTimeOnly ? "1": "0"};
    background-color: ${props => props.fullTimeOnly ? "#5964e0" : ""};
    }
}
.none {
  display: none;
}
`
export default Jobs