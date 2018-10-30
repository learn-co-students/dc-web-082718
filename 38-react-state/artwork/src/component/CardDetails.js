import React from 'react'

const CardDetails = (props) => {
  console.log(props)
  // let {painting:{title,image,artist:{name},dimensions:{height,width}}} = props
  return props.painting === null ? null : (
    <div className="ui card">
    <div>
      <img alt={props.painting.title} src={props.painting.image} />
    </div>
    <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
    </div>
  )
}

export default CardDetails
