import React from 'react'
import {Link} from 'react-router-dom'

const PaintingDetails = ({painting}) => {
  let retVal
  if(painting){
    retVal = (<div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <h3>
          {painting.title}
        </h3>
        <div>{`Artist: ${painting.artist.name}`}</div>
        <div>{`Born: ${painting.artist.birthday}`}</div>
        <div>{`Died: ${painting.artist.deathday}`}</div>
        <div>{`Date: ${painting.date}`}</div>
        <div>
          {`Dimensions: ${painting.dimensions.width} in. x ${painting.dimensions.height} in.`}
        </div>
      </div>
      <Link to="/paintings">Back to Gallery</Link>
    </div>)
  }else{
    retVal = null
  }
  return retVal
}

export default PaintingDetails
