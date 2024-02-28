import React from 'react'
import styled from 'styled-components'


const InputPasswordEstilizado = styled.input`
width: 100%;
height: 3rem;
/* padding-left: 1rem; */
background-color: #3D3D3D;
border: none;
text-indent: 15px;
font-size: 1rem;
font-weight: 400;
letter-spacing: 1px;
color: white;


`

export const InputPassword = ({...rest}) => {
  return (
    <>
    <InputPasswordEstilizado {...rest} />
    </>
  )
}
