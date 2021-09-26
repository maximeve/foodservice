import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { modalState } from '../redux/cart';
import CartModal from '../components/CartModal'
import { useSelector } from "react-redux";

function Navbar() {
    const dispatch = useDispatch();

    const modalStatecurrent = useSelector((state) => state.cart.modalIsOpen);
    const [isActive,setisActive ] = useState('')

    const modalHandler = () => {
        dispatch(modalState())
    }

    const clickHandler = () => {
        if(isActive === ''){
            setisActive('active')
        }else{
            setisActive('')
        }
        console.log(isActive)
    }

    return (
        <div>
            <nav className="navbar">
                <Link to='/'>
                    <img src="/assets/Foodlogo.png" alt="Logo" className="navbar__logo" /></Link>
                    <span className={`toggle-button ${isActive}`} onClick={clickHandler}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    </span>
                <ul className={isActive}>
                    <li><Link to='/services'>SERVICES</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
                <div className="navbar__icons">
                    <img onClick={modalHandler} src="/assets/cart.png" alt="cart" className="navbar__cart" />
                    <Link to='/account'><img src="/assets/profilepic.png" alt="profile" className="navbar__profile" /></Link>
                </div>
            </nav>
            { modalStatecurrent ? <CartModal/> : ''}
        </div>
    )
}

export default Navbar
