import React from "react";
import styled from 'styled-components'

 const HeaderDiv = styled.div`
display: flex;
flex-direction: row;
height: 80px;
background-color: white;
grid-column: 1/5;
align-items: center;
justify-content: center;
border: solid 1px;
`
const Botao = styled.button`
position: absolute;
left: 10px;
`
export const Header= (props) =>{
return (
        <HeaderDiv>
            <Botao>pokedex</Botao>
            <h1>pokedex</h1>
        </HeaderDiv>
    )
}