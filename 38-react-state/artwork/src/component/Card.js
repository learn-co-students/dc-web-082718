import React from 'react'

const Card = (props) => {
  // console.log()
  // let {painting:{title, artist:{name}} = props
  return (
    <div className="ui card">
    <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
    <button onClick={props.onClickOfPainting} data-painting-id={props.painting.id}>Show Details</button>
    </div>
  )
}

export default Card

// <div className="ui card">
// <div>
//   <img alt={title} src={image} />
// </div>
// <p>{`${title} by ${name}`}</p>
// <p>{`${height} x ${width}`}</p>
// </div>
