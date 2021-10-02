export const goToHomePage = (history) => {
    history.push('/')
}

export const goToPokedexPage = (history) => {
    history.push('/pokedex')
}

export const goToDetailsPage = (history) => {
    history.push('/details/:id')
}

export const goBack = (history) => {
    history.goBack()
}