import { useContext } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DarkModeContext from '../../contexts/Theme';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function SpecificJobs() {
    const filteredspecificJob = useSelector((state: RootState) => state.jobs.selectedJob);
    const {switchTheme,theme} = useContext(DarkModeContext)
  return (
    <>
     <Header switchTheme={switchTheme} theme={theme}/>
    <DetailsCont>
      <section className='company__container'>
          <section className='details__company '>
              <section className='job__logo__cont' style={{backgroundColor:`${filteredspecificJob?.logoBackground}`}}>
                <img src={filteredspecificJob?.logo} alt="logo" />
              </section>
              <section className='company__info'>
                <h1>{filteredspecificJob?.company}</h1>
                <p>{filteredspecificJob?.website}</p>
              </section>
              <section className='company__link'>
                <Link to={`${filteredspecificJob?.website}`}target='_blank' className='company__links'>
                  Company Site
                </Link>
              </section>
          </section>
      </section>


      {/**jobs container */}
      <section className='details__cont'>
        <section className='details'>
          <section className='top__info'>
            <section className='left__side'>
            <p className="job__post">
                <span>{filteredspecificJob?.postedAt}</span>
                <span>{filteredspecificJob?.contract}</span>
                
              </p>
              <p className='job__title'>{filteredspecificJob?.position}</p>
              <p className='job__country'>{filteredspecificJob?.location}</p>
            </section>
            <section className='rigth-side'>
            <Link to={`${filteredspecificJob?.website}`} target='_blank' className='company__linkss'>
                  apply Now
                </Link>
            </section>
          </section>
          <p className='job__description'>{filteredspecificJob?.description}</p>
        <p className='job__req'>Requirements</p>
        <p className='job__req__text'>{filteredspecificJob?.requirements.content}</p>
        <ul className='job__req__list'>
        {filteredspecificJob?.requirements.items.map((list,index) => (
           <li key={index}>{list}</li>
        ))}
        </ul>
        <p className='job__req'>What You Will Do</p>
        <p className='job__req__text'>{filteredspecificJob?.role.content}</p>
        <ul className='job__req__list'>
        {filteredspecificJob?.role.items.map((list,index) => (
           <li key={index}>{list}</li>
        ))}
         
        </ul>
        </section>
       
      </section>
    </DetailsCont>
    </>
  )
}
const DetailsCont = styled.div`
  position: relative;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
.company__container {
  width: 100%;
    max-width: 778px;
    padding: 0 20px;
    margin-bottom: 32px;
    
}
.details__company {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--filters-bg-color);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      overflow: visible;
    border-radius: 6px;
    margin-top: 25px;

    }
}
.job__logo__cont {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    @media (max-width: 767px)  {
      width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 15px;
    margin-top: -30px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 767px) {
        width: 50%;
      height: 50%;
      }
    }
}
.company__info {
  padding: 20px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1{
    font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: var(--text-color);
    text-align: center;
    margin: 0 0 13px;
  }
  p{
    font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #6e8098;
    text-align: center;
    margin: 0;
  }
}
.company__link {
  padding: 20px 40px 20px 0;

    display: flex;
   
   
}


//details

.details__cont {
  max-width: 778px;
    padding: 0 20px;
    margin-bottom: 80px;
    .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--filters-bg-color);
    border-radius: 6px;
    padding: 48px;
    @media (max-width: 767px) {
     padding: 40px 24px;
    }
    .top__info {
      width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
        .left__side {
          display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 767px) {
      margin-bottom: 54px;
    }
        }
      
}
    }

}
.rigth-side {
          display: flex;
          @media (max-width: 767px) {
      width: 100%;
    }
        }
.job__post {
      display: flex;
      align-items: center;
      margin: 0 0 16px;
      span {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #6e8098;
      }
      span::after {
        content: "";
        display: flex;
        margin: 0 12px;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        background-color: #6e8098;
      }
    
      
    }
    .job__description {
      font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: var(--light-text-color);
    margin: 0;
    }
    .job__req {
      font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: var(--text-color);
    margin: 40px 0 30px;
    }
    .job__req__text {
      font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: var(--light-text-color);
    margin: 0;
    }
    .job__req__list {
      margin: 24px 0 0;
    padding-left: 20px;
    li {
      font-family: Kumbh Sans,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: var(--light-text-color);
    margin: 0 0 8px;
    }
    }
    .job__title {
        font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    color: var(--text-color);
    margin: 0 0 16px;
      }
      .job__country {
        font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #5964e0;
    margin: 0;
      }
      .company__links, .company__linkss {
      font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    padding: 16px 20px;
   width: 100%;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    transition: background-color .2s ease-out;
    text-decoration: none;
    background-color: var(--button-light-bg-color);
    color: var(--button-light-color);
    }
    .company__linkss {
      background-color: #5964e0;
      color: var(--button-light-bg-color);
    }
    
`
export default SpecificJobs