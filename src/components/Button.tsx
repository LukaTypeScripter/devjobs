
import styled from 'styled-components'
interface Props {
  Text?:string
  onClick?: () => void;
  imgs?: string | undefined,
  width?:string
  height?:string
  marginRigth?:string | undefined
  margin?:string | undefined
}
function Button({Text,onClick,imgs,height,width,marginRigth,margin}:Props) {
  return (
    <Btn  onClick={onClick} height={height} width={width} marginRigth={marginRigth} margin={margin}>{Text ? Text : (
      <img src={imgs} alt="" />
    )}</Btn>
  )
}
const Btn = styled.button <Props>`
      font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #5964e0;
    border-radius: 5px;
    padding: ${ props=>!props.width && !props.height ? "16px 20px" : ''};
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    transition: background-color .2s ease-out;
    text-decoration: none;
    margin-right: ${props => props.marginRigth};
    margin:${props => props.margin};
    img {
      width: 24px;
      height: 24px;
      margin: auto;
    }
`
export default Button