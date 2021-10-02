import React from "react";
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { PokemonCard} from '../../components/PokemonCard'
import { useHistory } from "react-router-dom";
import { goToPokedexPage, goToDetailsPage } from "../../router/Coordinator";
import axios from 'axios'

const DivHome = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;

`

export const HomePage = () =>{
    
    const history = useHistory()

    

  
    return(
        <DivHome>
            <Header 
            goPage='POKEDEX' 
            text='Página Inicial' 
            functionGoPage={() => goToPokedexPage(history)}/>

            <PokemonCard 
            action='Adicionar'
            functionAction={() => goToDetailsPage(history)}
            />
        </DivHome>
    )
}