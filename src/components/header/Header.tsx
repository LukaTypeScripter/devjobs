
import styled from 'styled-components'
import { iconMoon, iconSun, logo, patternDetail, patternHeader } from '../../assets/desktop'
import { Link } from 'react-router-dom'
interface Props {
    switchTheme: () => void
    theme: string
}


function Header({switchTheme,theme}:Props) {
   
  return (
    <HeaderCont theme={theme}>
        <section className='top__header'>
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>
            <section className='theme__toggler' onClick={switchTheme}>
                <img src={iconMoon} alt="" />
                <section className='main__toggler'></section>
                <img src={iconSun} alt="" />
            </section>
        </section>
    </HeaderCont>
  )
}

const HeaderCont = styled.header<{theme:string}>`
    width: 100%;
    min-height: 162px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${patternHeader});
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: cover;
    padding-top: 45px;
    @media (max-width: 767px) {
        background-image: url(${patternDetail});
        padding-top: 32px;
    min-height: 136px;
    }
    .top__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    max-width: 1158px;
    padding: 0 20px;
    }
    .theme__toggler {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .main__toggler {
        position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 16px;
    width: 48px;
    height: 24px;
    background-color: #fff;
    border-radius: 12px;
}
.main__toggler::before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: #5964e0;
    top: 20%;
    left: 15px;
    transform: ${props => props.theme === 'light' ? "translateX(100%)":"translateX(-50%)"};
    transition: left .2s ease-out,background-color .2s ease-out;
}
`

export default Header