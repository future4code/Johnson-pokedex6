import React from "react";
import styled from 'styled-components'

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
    return(
        <CardPokemon>
            <p>oi</p>
            <ButtonDiv>
            <button>Adcionar</button>
            <button>Ver Detalhes</button>
            </ButtonDiv>
        </CardPokemon>
    )
}