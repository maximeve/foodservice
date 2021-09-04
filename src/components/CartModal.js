import React from "react";
import { useSelector } from "react-redux";
import "./CartModal.css";

function CartModal() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cartmodal">
      <ul>
        {cartItems.map((item) => (
          <li className="cartmodal__item">
            <p>{item.dish}</p>
            <p>{item.price}</p>
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
