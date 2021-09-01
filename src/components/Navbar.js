import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link to='/'>
                <img src="/assets/Foodlogo.png" alt="Logo" className="navbar__logo"/></Link>
                <ul>
                    <li>Why X</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
                <div className="navbar__icons">
                <Link to='/Cart'><img src="/assets/cart.png" alt="cart" className="navbar__cart"/></Link>
                <Link to='/'><img src="/assets/profilepic.png" alt="profile" className="navbar__profile"/></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
