import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
width: 100vw;
`

const Header = styled.div`
width: 100%;
height: 80px;
background-color: lightgray;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const ButtonReturn = styled.button`
padding: 10px;
background-color: darkblue;
color: white;
border: none;
cursor: pointer;

`

const ContainerCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 40px;
padding: 10px 20px;

`

const Card = styled.div`
background-color: darkgray;
width: 100%;
height: 300px;
display: flex;
flex-direction: column;

`
const ContainerImage = styled.div`
width: 100%;
height: 80%;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerButtons = styled.div`
width: 100%;
height: 20%;
`
const Button = styled.button`
background-color: darkblue;
border: none;
border-left: 1px solid gray;
height: 100%;
width: 50%;
cursor: pointer;
`

function PokedexPage() {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    const goToDetailsPage = () => {
        history.push('/details/:id')
    }
    return (
        <Container>
      <Header>
        <ButtonReturn onClick={goToHomePage}>Voltar para a lista de pokemons</ButtonReturn>
        POKEDEX
      </Header>
      <ContainerCard>
          <Card>
              <ContainerImage>Poke Card</ContainerImage>
              <ContainerButtons>
              <Button>Remover</Button>
              <Button onClick={goToDetailsPage}>Detalhes</Button>
              </ContainerButtons>
          </Card>

         
        
      </ContainerCard>
      </Container>

    );
  }
  
  export default PokedexPage;