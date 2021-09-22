import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

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

    const history = useHistory()

    const goToPokedexPage = () => {
        history.push('/pokedex')
    }

return (
        <HeaderDiv>
            <Botao onClick={goToPokedexPage}>pokedex</Botao>
            <h1>pokedex</h1>
        </HeaderDiv>
    )
}