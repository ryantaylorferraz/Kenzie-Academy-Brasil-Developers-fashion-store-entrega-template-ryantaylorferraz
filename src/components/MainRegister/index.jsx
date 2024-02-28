import React from 'react'
import { RegisterForm } from '../forms/RegisterForm'
import styled from 'styled-components'


const MainForm = styled.main`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding-inline: 5rem;

@media(max-width: 750px) {
        padding: 4rem clamp(5rem, 3.091rem + 10.182vw, 12rem);
    }


`

export const MainRegister = () => {
  return (
    <MainForm>
        <RegisterForm />
    </MainForm>
  )
}
