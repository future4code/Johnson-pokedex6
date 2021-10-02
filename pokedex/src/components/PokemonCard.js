import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { Button, Box} from "@chakra-ui/react"
import axios from 'axios'



const Container = styled.div`
min-height: 100vh;
width: 100vw;
background-color: #EDF2F7;

`

const ContainerCard = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px 20px;

`

const ContainerImage = styled.img`
border-top-left-radius: 4px;
border-top-right-radius: 4px;
width: 100%;
height: 80%;
color: yellow;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerButtons = styled.div`
width: 100%;
height: 20%;
display: grid;
padding: 0px 10px;
grid-template-columns: 100px 100px;
gap: 20px;
justify-content: space-between;
align-items: center;
`





export const PokemonCard = (props) =>{ 

  const [pokemons, setPokemons] = useState([])
  const [imagePokemon, setImagePokemon] = useState([])

  const GetPokemons = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then((response) =>{
        setPokemons(response.data.results)
        console.log(pokemons)
        console.log(response.data)
    }).catch((error)=>{
        console.log(error.response)
    })
}

useEffect(()=>{
    GetPokemons()
}, [])

useEffect(()=>{
  pokemons.map((pokemon) =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((response) =>{
      console.log(response)
    })
  })
  
})



  return (
    <Container>
  <ContainerCard>

    {pokemons.map((pokemon) =>{
      return <>
       <Box maxW="sm" borderRadius="lg" h='350px' margin='10px 10px' backgroundColor='white' boxShadow='3px 3px 3px gray'>
          <ContainerImage src={pokemon.url}/>
          <ContainerButtons>
          <Button colorScheme="yellow" >{props.action}</Button>
          <Button onClick={props.functionAction} colorScheme="gray" border='1px solid darkgray'> Detalhes</Button>
          </ContainerButtons>
      </Box>
      </>
    })}

  </ContainerCard>
  </Container>

);
}
