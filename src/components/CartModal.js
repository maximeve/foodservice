import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./CartModal.css";
import { addcart,removecart } from '../redux/cart';
import { modalState } from '../redux/cart';
import { Link } from "react-router-dom";

function CartModal() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  const modalHandler = ()=>{
    dispatch(modalState())
}

  return (
    <React.Fragment>
    <div onClick={modalHandler} className="cartmodal__background"></div>
    <div className="cartmodal">
      <ul>
        { cartItems.length > 0 ? cartItems.map((item) => (
          <li className="cartmodal__item">
            <img src={item.photo} alt={item.dish}/>
            <p>{item.dish}</p>
            <p>{item.price}</p>
            <div className="cartmodal__item_input">
            <button className="cartmodal__qty" onClick={() => { dispatch(removecart(item))}}>-</button>
            <input type="number" value={item.qty}/>
            <button className="cartmodal__qty" onClick={() => { dispatch(addcart(item))}}>+</button>
            </div>
          </li>
        )): <li className="cartmodal__item">
        <p>Cart is empty</p>
      </li> }
      </ul>
      { cartItems.length > 0 ? <Link to='/cart'><button onClick={modalHandler} className='cartmodal__button'>To Cart</button></Link> : ''} 
    </div>
    </React.Fragment>
  );
}

export default CartModal;
