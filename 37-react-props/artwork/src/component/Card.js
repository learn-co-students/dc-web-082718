import React from 'react'

const Card = ({
  painting:{title},
  painting:{image},
  painting:{artist:{name}},
  painting:{dimensions:{height}},
  painting:{dimensions:{width}}
}) => {
  console.log(name)
  return (
    <div className="ui card">
    <div>
      <img alt={title} src={image} />
    </div>
    <p>{`${title} by ${name}`}</p>
    <p>{`${height} x ${width}`}</p>
    </div>
  )
}

export default Card
