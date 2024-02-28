import React from "react";
import imgBanner from "../../assets/banner.jpg";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";
import { useMovieContext } from "../../providers/movieContext";

const DivEstilizadaBanner = styled.div`
  width: 100%;
  padding-block: clamp(1rem, 0.605rem + 2.105vw, 2.5rem);
  display: flex;
  flex-direction: column;




  img {
    width: 100%;
    height: 25rem;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 1.5rem;

    @media(max-width: 500px) {
      /* width: 50rem; */
      height: 11rem;
}
  }

  h2 {
    color: white;
    font-size: clamp(1rem, 0.605rem + 2.105vw, 2.5rem);
    font-weight: 600;
    width: 100%;
    @media(max-width: 500px) {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  p {
    color: #ffffff;
  }
`;

const DivTitleEstilizada = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding-block: clamp(1rem, 0.605rem + 2.105vw, 2.5rem);

  button {
    border: none;
    border-radius: 2rem;
    background-color: #ffbb38;
    padding: 0.7rem;
    width: 6rem;
    color: #000000;
    font-weight: bolder;

    @media(max-width: 500px) {
      /* width: 50rem; */
      width: 5.3rem;
      padding: .39rem;
}
  }

`;

const Div1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Div2 = styled.div`
    display: flex;
    height: 100%;
    align-items: end;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    span{
      color: #fff;
      font-size: 1.5rem;

      @media(max-width: 500px) {
        font-size: 1.3rem;
}
    }


`


const PEstilizadoTime = styled.p`
  font-size: 1rem;
`;

export const Banner = () => {
  const { movieOne } = useMovieContext();
  console.log(movieOne);
  return (
    <DivEstilizadaBanner>
      {movieOne.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image} alt="" />
          <DivTitleEstilizada>
            <Div1>
              <button>{movie.type}</button>
              <h2>{movie.name}</h2>
            </Div1>
            <Div2>
              <PEstilizadoTime>{movie.duration}m</PEstilizadoTime>
              <span>
                <FaRegStar color="FFBB38" size={24} /> 5.0
              </span>
            </Div2>
          </DivTitleEstilizada>
        </div>
      ))}
    </DivEstilizadaBanner>
  );
};
