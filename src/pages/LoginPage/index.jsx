import React from 'react'
import { StyleGlobal } from '../../components/styleGlobal'
import { Header } from '../../components/Header'
import styled from 'styled-components'
import { Footer } from '../../components/Footer'
import { MainLogin } from '../../components/MainLogin'

const DivEstilizada = styled.div`
  margin: 0 auto;

  height: 100vh;
  /* padding-top: 2rem; */

`

export const LoginPage = () => {
  return (
    <DivEstilizada>
    <StyleGlobal/>
    <Header />
    <MainLogin />

    <Footer />
  </DivEstilizada>
  )
}
