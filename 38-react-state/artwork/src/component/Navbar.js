import React from 'react'

const Navbar = ({color, icon, tagline, title}) => {
   return(
     <div className={`ui inverted ${color} menu`}>
       <a className="item" href="/">
         <h2 className="ui header">
           <i className={`${icon} icon`}></i>
           <div className="content">{title}</div>
           <div className="sub header">{tagline}</div>
         </h2>
       </a>
     </div>
   )
}

export default Navbar
