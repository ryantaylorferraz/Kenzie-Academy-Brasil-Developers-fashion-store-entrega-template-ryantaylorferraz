import React from 'react'
import styled from 'styled-components'

const FooterEstilizado = styled.footer`
width: 100%;
height: 7rem;
display: flex;
align-items: center;
justify-content: center;
border-top: 8px solid #4e4e4e53;
h4 {
    color: white;
    font-size: clamp(0.7rem, -0.02rem + 1.92vw, 1.3rem);
}

`

export const Footer = () => {
  return (
    <FooterEstilizado>
        <h4>Todos os direitos reservados - Kenzie Academy Brasil</h4>
    </FooterEstilizado>
    
  )
}
