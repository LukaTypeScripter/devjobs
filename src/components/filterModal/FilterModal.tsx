
import styled from "styled-components";
import { iconCheck, iconLocation } from "../../assets/desktop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../Button";
import { useRef, useEffect } from "react";
interface Props {
    handleFullTImeToggle: () => void
    fullTimeOnly: boolean
    handleFilter: () => void
    handleLocationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
function FilterModal({fullTimeOnly,handleFullTImeToggle,handleFilter,handleLocationChange,setIsOpenModal}:Props) {
    const Jobs = useSelector((state: RootState) => state.jobs);

    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpenModal(false);
          }
        };
      
        document.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [setIsOpenModal]);
  return (
    <FilterModalCont fullTimeOnly={fullTimeOnly} >
      <div className="black__bg"></div>
      <section className="modal" ref={modalRef}>
        <select className="country__select" onChange={handleLocationChange}>
            <option value="false">Filter by location…</option>
               {Jobs.jobs.map((job) => {
                   return (
                     <option key={job.id} value={job.location}>{job.location}</option>
                   )
               }
                  
               )}
        </select>
        <label className='fillter__fulltimes'>
               <input type="checkbox"  className='none'  checked={fullTimeOnly}
   onChange={handleFullTImeToggle}/>
               <span className='check'>
                 Full Time
               <span>&nbsp;Only</span>
               </span>
             </label>
             <Button Text="Search" margin="24px" width="290px" height="50px" onClick={handleFilter}/>
      </section>
    </FilterModalCont>
  );
}
const FilterModalCont = styled.section<{fullTimeOnly:boolean}>`
  position: fixed;
  inset: 0;
  z-index: 100;
  .black__bg {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 48px);
    max-width: 350px;
    background-color: var(--filters-bg-color);
    border-radius: 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
  }
  .country__select {
    width: 100%;
    min-height: 24px;
    padding: 24px 24px 24px 56px;
    background-color: var(--filters-bg-color);
    background-image: url(${iconLocation});
    background-position: left 24px center;
    background-size: 16px 24px;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-family: Kumbh Sans,sans-serif;
    font-size: 16px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    border-bottom: 1px solid rgba(110,128,152,.2);
  }
  .fillter__fulltimes {
  margin-left: 32px;
    margin-right: 26px;
    margin-top: 26px;
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

`;
export default FilterModal;
