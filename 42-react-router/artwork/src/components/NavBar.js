import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const styleDefault = {
  "color": "black"
}

const styleActive = {
  "background-color" : "black"
}

const NavBar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <a className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </a>
     <NavLink className="item" exact style={styleDefault} activeStyle={styleActive} to="/">About</NavLink>
     <NavLink className="item" exact style={styleDefault} activeStyle={styleActive} to='/paintings'>Gallery</NavLink>
   </div>
  )
}

export default NavBar
