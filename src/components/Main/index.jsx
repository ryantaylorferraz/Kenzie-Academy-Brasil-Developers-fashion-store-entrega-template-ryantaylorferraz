import React from 'react'
import styled from 'styled-components'
import { Banner } from '../Banner'
import { MovieList } from '../MovieList'

const MainEstilizado = styled.main`
padding-top: 3rem;
padding-bottom: 3rem;
padding-inline: 5rem;
margin: 0 auto;



`

export const Main = () => {
  return (
    <MainEstilizado>
        <Banner />
        <MovieList />

    </MainEstilizado>
  )
}
