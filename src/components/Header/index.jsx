import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderEstilizado = styled.header`
margin: 0 auto;
   padding-inline: clamp(3rem, 2.4rem + 3.2vw, 5rem);
   height: 5rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: transparent;
position: absolute;

@media(max-width: 500px) {
   padding-bottom: 1rem;
}

/* width: 100%; */
 h1 {
    color: white;
    font-weight: 600;
    font-size: clamp(1.3rem, 1.168rem + 0.702vw, 1.8rem);
    cursor: pointer;
    background-color: transparent;
 }

 h4 {
    color: white;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
   &:hover {
      color: #FFBB38;
   }

   @media(max-width: 600px) {
      display: none;
   }
 }

 div{
    display: flex;
    gap: 2rem;
    align-items: center;
    background-color: transparent;
    a {
      background-color: transparent;
    }
 }

 button{
    border: none;
    border-radius: 2rem;
    background-color: #FFBB38;
    padding: .7rem;
    width: 6rem;
    color: #000000;
    font-weight: bolder;
    transition: .4s ease;
    &:hover {
      background-color: #ffb938ef;
      transform: scale(1.12);
    }
 }


`

export const Header = () => {
  return (
    <HeaderEstilizado>
        <Link to="/moviePage/:id"><h1>kenziemovie</h1></Link>
        <div>
            <Link to="/registerPage">
               <h4>cadastra-se</h4>
            </Link>
            <Link to="/loginPage"><button>Entrar</button></Link>
        </div>
    </HeaderEstilizado>
  )
}
