import React,{useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import './CartPage.css'

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.map(item => ({ ...item, total:parseInt(item.price)*item.qty}))
  var [totalAmount,settotalAmount] = useState()

  useEffect(() => {
    var count = total.map(x => count += x.total)
    settotalAmount(count)
    console.log(count)
  }, [cartItems])
  
  return (
    <div className='cartpage'>
      <Navbar />
        <h1>Cart</h1>
        <ul>
          {total.map((item) => (
            <li>
              <div className='cartpage__item'>
              <img src={item.photo} alt={item.dish}/><h3>{item.dish}</h3>&nbsp;<p>x</p>&nbsp;<h4>{item.qty}</h4>
              </div>
              <div>
              <h4>{item.total}€</h4>
              </div>
              </li>
          ))}
        </ul>
        <div className='cartpage__total'>{totalAmount}</div>
        <button className='cartpage__orderbutton'>Order</button>
   </div>
  );
}

export default CartPage;
