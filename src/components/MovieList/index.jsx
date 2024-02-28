import React from 'react'
import styled from 'styled-components'
import { MovieCard } from './MovieCard'
import { useMovieContext } from '../../providers/movieContext'

const UlEstilizada = styled.ul`
display: flex;
gap: 2rem;
overflow-x: auto;

@media(max-width: 500px) {
      flex-direction: column;
      padding: 0;
}

&::-webkit-scrollbar {
    height: 8px;
  }

&::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
&::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    cursor: pointer;
  }

padding: 1rem;
`

export const MovieList = () => {
    const {listMovie} = useMovieContext()

  return (
    <UlEstilizada>
        {listMovie.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </UlEstilizada>
  )
}
