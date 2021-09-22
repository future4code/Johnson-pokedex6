import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const CardPokemon = styled.div`
border: solid 1px;
height:300px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;
`
export const PokemonCard = () =>{
    const history = useHistory()

    const goToDetailsPage = () => {
        history.push('/details/:id')
    }
    
    return(
        <CardPokemon>
            <p>oi</p>
            <ButtonDiv>
            <button>Adicionar</button>
            <button onClick={goToDetailsPage}>Ver Detalhes</button>
            </ButtonDiv>
        </CardPokemon>
    )
}