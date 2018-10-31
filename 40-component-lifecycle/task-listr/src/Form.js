import React from 'react'

const Form = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input type="text" onChange={props.onChange}/>
      <input type="submit" />
    </form>
  )
}

export default Form
