import React from 'react'

const Searchbar = (props) => {
  console.log(props.onChange)
  return(
    <input type='text' onChange={props.someName} />
  )
}

export default Searchbar;
