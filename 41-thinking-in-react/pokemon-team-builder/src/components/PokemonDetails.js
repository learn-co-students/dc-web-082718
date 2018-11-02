import React from 'react'

const PokemonDetails = (props) => {
  return(
    props.pokemon === null ? null : <div className="card details">
      <div>
        <div className="row">{props.pokemon.name}</div>
        <div className="row">
          <div><img alt="" src={props.pokemon.sprite} /></div>
          <div className="block">{props.pokemon.stats[0].stat.name}: {props.pokemon.stats[0].base_stat}</div>
          <div className="block">{props.pokemon.stats[1].stat.name}: {props.pokemon.stats[1].base_stat}</div>
          <div className="block">{props.pokemon.stats[2].stat.name}: {props.pokemon.stats[2].base_stat}</div>
          <div className="block">{props.pokemon.stats[3].stat.name}: {props.pokemon.stats[3].base_stat}</div>
          <div className="block">{props.pokemon.stats[4].stat.name}: {props.pokemon.stats[4].base_stat}</div>
          <div className="block">{props.pokemon.stats[5].stat.name}: {props.pokemon.stats[5].base_stat}</div>

        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
