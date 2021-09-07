import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./CartModal.css";
import { addcart,removecart } from '../redux/cart'

function CartModal() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  return (
    <div className="cartmodal">
      <ul>
        {cartItems.map((item) => (
          <li className="cartmodal__item">
            <img src={item.photo} alt={item.dish}/>
            <p>{item.dish}</p>
            <p>{item.price}</p>
            <div className="cartmodal__item_input">
            <button onClick={() => { dispatch(removecart(item))}}>-</button>
            <input type="number" value={item.qty}/>
            <button onClick={() => { dispatch(addcart(item))}}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
