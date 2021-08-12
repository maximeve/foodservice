import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src="./assets/Foodlogo.png" alt="Logo" className="navbar__logo"/>
                <ul>
                    <li>Why X</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
                <img src="./assets/profilepic.png" alt="profile" className="navbar__profile"/>
            </nav>
        </div>
    )
}

export default Navbar
