import React,{ useRef } from 'react'
import { setsearch } from '../redux/location'
import { useSelector,useDispatch } from "react-redux";
import './Hero.css'

function Hero() {
    const searchInput = useRef('');
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.location.search);

    const searchHandler = (e) =>{
        e.preventDefault()
        dispatch(setsearch(searchInput.current.value))
    } 

    return (
        <div className="hero">
            <div className="hero__image">
                <img src="./assets/hero.svg" alt='hero' />
            </div>
            <div className="hero__input">
                <h2>Hungry?<br />You are in the right place</h2>
                <input type="text" ref={searchInput} />
                <button onClick={searchHandler}>Find food</button>
            </div>
        </div>
    )
}

export default Hero
