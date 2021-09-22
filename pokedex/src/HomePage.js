import React from "react";
import styled from 'styled-components'
import { Header } from "./Header";
import { PokemonCard } from "./PokemonCard";

const DivHome = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows:  1fr 1fr 1fr 1fr;
`

export const HomePage = () =>{
    
    return(
        <DivHome>
            <Header>
            </Header>
            <PokemonCard></PokemonCard>
        </DivHome>
    )
}