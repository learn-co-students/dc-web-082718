import React from 'react'

const Card = (props) => {
  return(
      props.pokemon ? <div
        className="card pokemon"
        draggable="true"
        onDragEnd={() => {props.onDragged(props.pokemon.name)}}
        onClick={() => {props.onClickOfCard(props.pokemon.id)}}
        >{props.pokemon.name}
      </div> : null

  )
}

export default Card
