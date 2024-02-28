import React from 'react'
import styled from 'styled-components'
import { Input } from '../../inputs/Input'
import { InputPassword } from '../../inputs/InputPassword'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const FormEstilizado = styled.form`
width: 50rem;

h3 {
        color: white;
        padding-block: 1.6rem;
        font-size: clamp(0.6rem, 0.436rem + 0.873vw, 1.2rem);
    }

`

const DivTitle = styled.div`
        display: flex;
        justify-content: space-between;

        @media(max-width: 500px) {
            justify-content: center;
            font-size: 2.5rem;
        }

    h2 {
        color: white;
        font-size: clamp(1rem, 0.755rem + 1.309vw, 1.9rem);
        font-weight: 600;

    }
    span {
        color: #FFBB38;
        display: flex;
        align-items: center;
        gap: .5rem;

        @media(max-width: 500px) {
            display: none;
        }
    }
`

const DivInput = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.5rem;

    @media(max-width: 750px) {
        flex-direction: column;
    }

`
const DivInputPassword = styled.div`
    display: flex;
    gap: 1.5rem;

    @media(max-width: 750px) {
        flex-direction: column;
    }

`

const DivButton = styled.div`
display: flex;
justify-content: end;
align-items: center;
/* height: 4rem; */
padding-top: 1.3rem;
button {
    padding-block: .7rem;
    width: 9rem;
    border: none;
    border-radius: 2rem;
    background-color: #FFBB38;
    font-weight: 600;
}

`

export const RegisterForm = () => {
  return (
    <FormEstilizado>
        <DivTitle>
            <h2>Cadastro</h2>
            <Link to="/loginPage"><span> <FaArrowLeft color='#FFBB38' size={20} /> <p>Voltar</p></span></Link>
        </DivTitle>
        <h3>Preencha os campos para cadastrar-se</h3>
        <DivInput>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="E-mail" />
        </DivInput>
        <DivInputPassword>
            <InputPassword type="password" placeholder="Senha" />
            <InputPassword type="password" placeholder="Confirmar senha" />
        </DivInputPassword>
        <DivButton>
        <button>Cadastre-se</button>
        </DivButton>

    </FormEstilizado>
  )
}
