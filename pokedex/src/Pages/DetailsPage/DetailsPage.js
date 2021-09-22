import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";


const DivHome = styled.div`

`

export const DetailsPage = () =>{
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }
    
    return(
        <DivHome>
            oláaa, falta o layout da details Page, desculpe :(
            <button onClick={goToHomePage}>Voltar</button>
       
        </DivHome>
    )
}