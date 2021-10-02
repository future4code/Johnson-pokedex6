import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { Header } from "../../components/Header";
import { goToHomePage, goToDetailsPage } from "../../router/Coordinator";



function PokedexPage() {
    const history = useHistory()
 
    return (
      <>
      <Header goPage='Pagina Inicial' text='POKEDEX' functionGoPage={()=> goToHomePage(history)}/>
      <PokemonCard 
      action='Remover'
      functionAction={() => goToDetailsPage(history)}
      />
      </>
    );
  }

  
  export default PokedexPage;