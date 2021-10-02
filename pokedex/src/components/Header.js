import React from "react";
import styled from 'styled-components'
import {Button} from "@chakra-ui/react"


const ContainerHeader = styled.div`
width: 100vw;
background-color: white;
padding: 10px 5px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;

`




export const Header = (props) =>{ 
    return(
        <ContainerHeader>
         <Button w='110px' boxShadow='2px 2px 2px gray' colorScheme="yellow" onClick={props.functionGoPage}>{props.goPage}</Button>
         <img src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'></img>
         {/* <p>{props.text}</p> */}
        
        </ContainerHeader>
    )
}