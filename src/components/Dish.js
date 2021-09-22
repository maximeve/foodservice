import React, { useRef } from 'react';
import { addcart } from '../redux/cart'
import { useDispatch } from 'react-redux';
import './Dish.css'


function Dish({desc,name,picture,price}) {
  const dispatch = useDispatch();
  
  const dishName = useRef(null)
  const dishDesc = useRef(null)
  const dishPrice = useRef(null)
  const dishPic = useRef(null)

  const addCartHandler = () => {
    let cartItem = {
      'dish': dishName.current.innerHTML,
      'desc': dishDesc.current.innerHTML,
      'price': dishPrice.current.innerHTML,
      'photo': dishPic.current.currentSrc,
      'qty': 1
    }
    dispatch(addcart(cartItem))
  }

  return (
    <div className="dish">
      <div className='dish__details'>
        <h3 ref={dishName} >{name}</h3>
        <p ref={dishDesc}>{desc}</p>
        <p ref={dishPrice} className="dish__details__price">{price}</p>
        <button onClick={addCartHandler}>ADD TO CART</button>
      </div>
      <img src={picture} className="dish__img" ref={dishPic} alt='food'/>
    </div>
  )
}

export default Dish
