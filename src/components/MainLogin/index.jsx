import React from 'react';
import styled from 'styled-components';
import imagemFundo from '../../assets/imagemFundo.jpg';
import { LoginForm } from '../forms/LoginForm';

const FigureEstilizada = styled.figure`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagemFundo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;



  div{
    position: relative;
    width: 100%;
    display: flex;


  }

`;

export const MainLogin = () => {
  return (<>
  <FigureEstilizada>
    <div>
    <LoginForm />
    </div>
    </FigureEstilizada>;
  
  </>
  )
};
