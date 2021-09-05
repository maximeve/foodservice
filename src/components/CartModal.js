import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./CartModal.css";
import { addcart,removecart } from '../redux/cart'

function CartModal() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()

  const CartHandler = (action, item) => {
    console.log('test')
    let cartItem = {
      'dish': item.dish,
      'desc': item.desc,
      'price': item.price,
      'photo': item.photo,
      'qty': 1
    }
    if (item === 'add'){
      dispatch(addcart(cartItem))
    }
    if (item === 'remove') {
      dispatch(removecart(cartItem))
    }
  }

  return (
    <div className="cartmodal">
      <ul>
        {cartItems.map((item) => (
          <li className="cartmodal__item">
            <img src={item.photo} alt={item.dish}/>
            <p>{item.dish}</p>
            <p>{item.price}</p>
            <div className="cartmodal__item_input">
            <button onClick={CartHandler('remove', item)}>-</button>
            <input type="number" value={item.qty}/>
            <button onClick={CartHandler('add', item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
