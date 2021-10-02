import React from "react";
import styled from 'styled-components';
import {Header} from './components/Header';

const DivDetails = styled.div`
width: 100vw;
height: 100vh;
background-color: gray;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 9fr;
`
const DivImagens = styled.div`
background-color: green;
`
const DivInform = styled.div`
background-color: blue;
text-align: center;
`
const DivAtaq = styled.div`
background-color: blueviolet;
text-align: center;
`
export const DetailsPage = () =>{

    return(
        <DivDetails>
            <Header></Header>
            <DivImagens>

            </DivImagens>

            <DivInform>
                <h2>Poderes</h2>
            </DivInform>

            <DivAtaq>
                <h2>Pricipais Ataques</h2>
            </DivAtaq>
        </DivDetails>
    )
}