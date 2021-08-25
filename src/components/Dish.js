import React from 'react'
import './Dish.css'

function Dish() {
    return (
        <div className="dish">
        <div className='dish__details'>
          <h3>Magherita pizza</h3>
          <p>Basil leaves,cheesy thin crust</p>
          <p>&euro; 12</p>
          <button>ADD TO CART</button>
        </div>
        <img src="/assets/Foodlogo.png" className="dish__img"></img>
      </div>
    )
}

export default Dish
