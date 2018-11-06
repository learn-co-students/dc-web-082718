import React from 'react'
import Painting from './Painting'

const PaintingsList = ({filterTerm, paintings, onSelectPainting}) => {
  let filteredPaintings = paintings.filter((painting) => painting.title.includes(filterTerm))
  return(
    filteredPaintings.map(painting => <Painting
      key={painting.id}
      painting={painting}
      onSelectPainting={onSelectPainting}
    />)
  )
}

export default PaintingsList
