import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import { goBack } from "../../router/Coordinator";


const ContainerHeader = styled.div`
width: 100vw;
background-color: white;
padding: 10px 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

`
const ContainerDetails = styled.div`
background-color: #EDF2F7;
width: 100%;
height: 90vh;
display: flex;
padding: 30px;
`
const ContainerImage = styled.div`
display: grid;
width: 100%;
height: 100%;
gap: 5px;
`

const Image = styled.div`
background-image: url('https://picsum.photos/200');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 100%;
width: 100%;
border: 1px solid darkgray;
`
const Stats = styled.div`
width: 100%;
height: 100%;
padding: 10px;
border: 1px solid darkgray;
margin: 0 5px;
display: flex;
flex-direction: column;
align-items: center;
`
const Li = styled.li`
margin-top: 30px;
list-style-type: none;
font-size: 20px;
`

const ContainerTypeMove= styled.div`
display: grid;
grid-template-rows: 10% 89%;
gap: 5px;
width: 100%;
height: 100%;
`

const Type = styled.div`
border: 1px solid darkgray;
display: flex;
justify-content: center;
align-items: center;

`
const P = styled.p`
margin: 0px 20px;
`
const Move = styled.div`
border: 1px solid darkgray;
display: flex;
flex-direction: column;
align-items: center;
`




export const DetailsPage = () =>{ 
  const history = useHistory()

   

    return(
        <>
        <ContainerHeader>
         <Button onClick={() => goBack(history)} w='100px' boxShadow='2px 2px 2px gray' colorScheme="yellow">Voltar</Button>
         <p>Detalhes</p>
         <Button marginTop='5px' boxShadow='2px 2px 2px gray' colorScheme="yellow">Adicionar/Remover da Pokedex</Button>
        </ContainerHeader>
        <ContainerDetails>

          <ContainerImage>
            <Image></Image>
            <Image></Image>
          </ContainerImage>

          <Stats>
            <Li><b>Stats</b></Li>
            <Li>HP: 46</Li>
            <Li>Attack: 49</Li>
            <Li>Defense: 50</Li>
            <Li>Special-attack: 60</Li>
            <Li>Special-defense: 30</Li>
            <Li>Speed: 45</Li>
          </Stats>

          <ContainerTypeMove>

            <Type>
             <P>Type 1</P>
             <P>Type 2</P>
            </Type>

            <Move>
            <Li><b>Moves</b></Li>
            <Li>Move name 1</Li>
            <Li>Move name 2</Li>
            <Li>Move name 3</Li>
            </Move>

          </ContainerTypeMove>

        </ContainerDetails>
        </>
    )
}