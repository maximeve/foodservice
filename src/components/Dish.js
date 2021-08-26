import React, { useRef } from 'react';
import './Dish.css'


// NOG EEN ID NODIG PROPS

function Dish(props) {

  const dishName = useRef(null)
  const dishPrice = useRef(null)
  const dishPic = useRef(null)

  const addCartHandler = () => {
    let cartItem = {
      'dish': dishName.current.innerHTML,
      'price': dishPrice.current.innerHTML,
      'photo': dishPic.current.currentSrc
    }
  }

  return (
    <div className="dish">
      <div className='dish__details'>
        <h3 ref={dishName} >Magherita pizza</h3>
        <p>Basil leaves,cheesy thin crust</p>
        <p ref={dishPrice}>&euro; 12</p>
        <button onClick={addCartHandler}>ADD TO CART</button>
      </div>
      <img src="/assets/Foodlogo.png" className="dish__img" ref={dishPic} />
    </div>
  )
}

export default Dish
