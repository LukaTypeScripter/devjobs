import { Link } from "react-router-dom";
import styled from "styled-components";
import { Job } from "../../types";
interface CardsProps {
  jobs: Job[];
  handleJobClick: (job: Job) => void
}
function Cards({ jobs,handleJobClick }: CardsProps) {
  return (
    <CardCont>
      <section className="job__list" >
        {jobs.map((job) => (
          <Link to={`/Jobs/${job.id}`} className="job__item" key={job.id} onClick={() => handleJobClick(job)}>
            <section
              className="job__container"
              style={{ backgroundColor: `${job.logoBackground}` }}
            >
              <img src={job.logo} alt="logo" />
            </section>
            <div className="job__info">
              <p className="job__post">
                <span>{job.postedAt}</span>
                <span>{job.contract}</span>
              </p>
              <p className="job__title">{job.position}</p>
              <p className="job__company">{job.company}</p>
            </div>
            <p className="job__country">{job.location}</p>
          </Link>
        ))}
      </section>
    </CardCont>
  );
}
const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  width: 100%;
  max-width: 1158px;
  padding: 0 20px;
  .job__list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .job__item {
    position: relative;
    width: 280px;
    margin-right: 30px;
    margin-top: 25px;
    background: var(--filters-bg-color);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 230px;
    padding: 50px 32px 32px;
    margin-bottom: 40px;
    text-decoration: none;
    @media (max-width: 1023px) {
      width: 300px;
      margin-right: 10px;
    }
    @media (max-width: 767px) {
      width: 100%;
    margin-right: 0;
    margin-bottom: 24px;
    }
  }
  .job__container {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 32px;
    top: -25px;
    border-radius: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .job__info {
    flex: 1;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
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
  }
  .job__title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: var(--text-color);
    margin: 0 0 16px;
  }
  .job__company {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #6e8098;
    margin: 0;
  }

  .job__country {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #5964e0;
    margin: 0;
  }
`;
export default Cards;
