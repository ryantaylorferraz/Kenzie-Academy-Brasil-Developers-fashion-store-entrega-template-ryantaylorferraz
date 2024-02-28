import React from 'react'
import styled from 'styled-components'
import { StyleGlobal } from '../../components/styleGlobal'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MainRegister } from '../../components/MainRegister'


const DivEstilizada = styled.div`
  margin: 0 auto;

  height: 100vh;

`

export const RegisterPage = () => {
  return (
    <DivEstilizada>
    <StyleGlobal/>
    <Header />
    <MainRegister />

    <Footer />
  </DivEstilizada>
  )
}
