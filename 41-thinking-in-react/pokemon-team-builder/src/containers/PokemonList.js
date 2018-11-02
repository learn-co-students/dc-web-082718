import React from 'react'
import Card from '../components/Card'

const PokemonList = (props) => {
  return(
       props.pokemonToRender.length === 0 ? null : props.pokemonToRender.map(pokemon =>
         <Card
          key={pokemon.name}
          pokemon={pokemon}
          onDragged={props.onDragOfCard}
          onClickOfCard={props.onClickOfPokemon}
         />)
  )
}

export default PokemonList
