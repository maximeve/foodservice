import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <React.Fragment>
      <Navbar />
      <ul>
        {cartItems.map((item) => (
          <li>{item.dish}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Cart;
