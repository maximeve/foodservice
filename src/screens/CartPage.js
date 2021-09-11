import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='cartpage'>
      <Navbar />
        <h1>THIS IS CARTPAGE</h1>
        <ul>
          {cartItems.map((item) => (
            <li>{item.dish}</li>
          ))}
        </ul>
   </div>
  );
}

export default CartPage;
