import React from 'react'
import styled from 'styled-components'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LiEstilizada = styled.li`
display: flex;
flex-direction: column;
color: white;
gap: 1rem;
/* cursor: pointer; */
transition: transform 0.3s ease;

&:hover {
transform: scale(1.03);
}
img{
    width: 18rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 1.5rem;
    @media(max-width: 500px) {
        width: 100%;
    }

}
`

const DivMainEstilizada = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: .3rem;

`

const DivEstilizada1 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

button {
    border: none;
    border-radius: 2rem;
    background-color: #FFBB38;
    padding: .4rem;
    width: 4.5rem;
    color: #000000;
    font-weight: bolder;
}
`
const DivEstilizada2 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
span {
    font-size: 1.2rem;
    
}
`

export const MovieCard = ({movie}) => {
  return (
    <LiEstilizada>
        <Link to={`/moviePage/${movie.id}`}>
        <img src={movie.image} alt="" />
        </Link>
        <DivMainEstilizada>
            <DivEstilizada1>
                <button>{movie.type}</button>
                <span>{movie.duration}m</span>
            </DivEstilizada1>
            <DivEstilizada2>
                <h3>{movie.name}</h3>
                <span><FaRegStar color='FFBB38' size={17}/> 5.0</span>
            </DivEstilizada2>
        </DivMainEstilizada>

    </LiEstilizada>
  )
}
