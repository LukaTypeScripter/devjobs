import React from 'react'
import styled from 'styled-components'
interface Props {
  Text:string
  onClick?: () => void;
}
function Button({Text,onClick}:Props) {
  return (
    <Btn onClick={onClick}>{Text}</Btn>
  )
}
const Btn = styled.button `
      font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #5964e0;
    border-radius: 5px;
    padding: 16px 20px;
    min-width: 141px;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    transition: background-color .2s ease-out;
    text-decoration: none;

`
export default Button