
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Cards() {
  return (
    <CardCont>
        <section className='job__list'>
            <Link to="/" className='job__item'>
                <section className='job__container'>
                    <img src="" alt="" />
                </section>
                <div className='job__info'>
                    <p className='job__post'>aweawe</p>
                    <p className='job__title'>Fullstack Developer</p>
                    <p className='job__company'>aweawe</p>
                </div>
                <p className='job__country'>weeee</p>
            </Link>
        </section>
    </CardCont>
  )
}
const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    .job__list {
        display: flex;
        width: 100%;
    flex-wrap: wrap;
    margin-bottom: 16px;
    }
    .job__item {
        position: relative;
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

    }
    .job__country {
        font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #5964e0;
    margin: 0;
    }
`
export default Cards