import React, { useEffect } from 'react'
import styled from 'styled-components'
import { StyleGlobal } from '../../components/styleGlobal'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import { useMovieContext } from '../../providers/movieContext'
import { useParams } from 'react-router-dom'

const DivEstilizada = styled.div`
  margin: 0 auto;

  height: 100vh;

`

export const MoviePage = () => {
    const { setListMovie, setMovieOne } = useMovieContext()
    const { id } = useParams()
    console.log(id)
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await api.get(`/movies/${id}`)
                setMovieOne([response.data])
                const { data } = await api.get("/movies")
                const filteredMovies = data.filter((movie) => movie.id !== response.data.id)
                setListMovie(filteredMovies)
                
            } catch (error) {
                console.log(error)
            }
        };
        getMovies()
    }, [id, setListMovie])

  return (
    <DivEstilizada>
    <StyleGlobal/>
    <Header />
    <Main />

    <Footer />
  </DivEstilizada>
  )
}
