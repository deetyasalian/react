import React from 'react'

import "../style/style.scss"
import logo from"../image/logo.png";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <div className="links">
        <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
        <Link className="link" to="/?cat=art"><h6>SCIENCE</h6></Link>
        <Link className="link" to="/?cat=art"><h6>TECHNOLOGY</h6></Link>
        <Link className="link" to="/?cat=art"><h6>CINEMA</h6></Link>
        <Link className="link" to="/?cat=art"><h6>DESIGN</h6></Link>
        <Link className="link" to="/?cat=art"><h6>FOOD</h6></Link>
        <span>Deetya</span>
        <span>Logout</span>
      <span className="write">
        <Link className="Link" to="/write">write</Link>
      </span>
      </div>
      </div>
 
    </div>
  )
}

export default Navbar
