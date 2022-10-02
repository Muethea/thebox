import React from 'react'
import { Link } from 'react-router-dom'
import logo from './imgs/logo.png'
const Navbar = () => {
  return (
    <nav>

        <div className="logo">
            <img src={logo} alt="" srcset="" />
        <a href="#"><span>The</span>Box</a>
        </div>
        
        <div className="menu">
        <Link to={'/'}>
        Home
        </Link>
        <Link  to={'about'}>
        About Us
        </Link>
        <Link to={'/projects'}>
        Projects
        </Link>
        <Link  to={'services'}>
        Services
        </Link>
        <Link  to={'contact'}>
        Contact US
        </Link>


        </div>
        
    </nav>
  )
}

export default Navbar