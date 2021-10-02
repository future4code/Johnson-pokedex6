import React from "react";
import { HomePage } from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/Pokedex/PokedexPage";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Router () {
    return (
        <BrowserRouter>
         <Switch>
             <Route exact path={'/'}>
                <HomePage/>
             </Route>

             <Route exact path={'/pokedex'}>
                 <PokedexPage/>
             </Route>
             
             <Route exact path={'/details/:id'}>
                 <DetailsPage/>
             </Route>
         </Switch>
        </BrowserRouter>
    )
}

export default Router
