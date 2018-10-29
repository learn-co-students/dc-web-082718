import React from 'react'
import Card from '../component/Card'
import paintings from '../data/paintings'

// const paintings = [
//   {id:1, title: "painting1", author:"author1"},
//   {id:2, title: "painting2", author:"author2"},
//   {id:3, title: "painting3", author:"author3"},
// ]

const CardContainer = () => {
  // console.log(paintings)
  return (
    <div>
      {paintings.map(painting => <Card key={painting.id}  painting={painting}/>)}
    </div>
  )
}

export default CardContainer
