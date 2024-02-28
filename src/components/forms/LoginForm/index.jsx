import React from 'react'
import { Input } from '../../inputs/Input'
import { InputPassword } from '../../inputs/InputPassword'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const FormEstilizado = styled.form`
position: absolute;
top: 10rem;
left: 10vw;
width: clamp(25rem, 22.353rem + 9.412vw, 30rem);
height: 55vh;
padding: 1.5rem clamp(1.8rem, 1.38rem + 2.24vw, 3.2rem);

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media(max-width: 450px) {
  left: clamp(1.8rem, -0.2rem + 10.667vw, 2.8rem);
  width: clamp(15rem, -1rem + 85.333vw, 23rem);
}


h1 {
  font-size: 2.5rem;
  color: white;
  font-weight: 600;
  width: 100%;
  margin-bottom: 1.5rem;
}

`

const DivButtonEstilizado = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
gap: 1rem;
button{
  height: 2.5rem;
  width: 100%;
  border-radius: 2rem;
  border: none;
  background-color: #FFBB38;
  font-size: 1.1rem;
  font-weight: 600;
}

p {
  font-size: .8rem;
  color: white;
}

h4 {
  font-size: 1.1rem;
  color: #FFBB38;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}



`

export const LoginForm = () => {
  return (
    <>
        <FormEstilizado action="">
          <h1>Login</h1>
          <div>
            <Input type="text" placeholder="E-mail" />
          </div>
          <div>
            <InputPassword type="password" placeholder="Senha" />
          </div>
          <DivButtonEstilizado>
            <button>Entrar</button>
            <p>OU</p>
            <Link to="/registerPage">
              <h4>Cadastre-se</h4>
            </Link>
          </DivButtonEstilizado>



        </FormEstilizado>
    </>
  )
}
