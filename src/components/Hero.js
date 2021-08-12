import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="hero__image">
                <img src="./assets/hero.svg" alt='hero' />
            </div>
            <div className="hero__input">
                <h2>Hungry?<br />You are in the right place</h2>
                <input type="text" />
                <button>Find food</button>
            </div>
        </div>
    )
}

export default Hero
