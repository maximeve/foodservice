import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearcart } from '../redux/cart';
import './CartPage.css'

function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.map(item => ({ ...item, total: parseInt(item.price) * item.qty }))
  var [totalAmount, settotalAmount] = useState()

  useEffect(() => {
    let totalPrice = total.reduce(function (accumulator, item) {
      return accumulator + item.total;
    }, 0);
    settotalAmount(totalPrice)
  }, [cartItems])

  return (
    <>
    <Navbar />
    <div className='cartpage'>
      <h1>Cart</h1>
      <div className="cartpage__container">
        <div className="cartpage__left">
        <h1>You order from :</h1>
          <h3>{cartItems.length > 0 ? cartItems[0].restaurant : 'Cart is empty'}</h3>
        </div>
        <div className="cartpage__right">
          <ul>
            {total.map((item) => (
              <li>
                <div className='cartpage__item'>
                  <img src={item.photo} alt={item.dish} />
                  <h3>{item.dish}&nbsp;</h3>
                  <p>x&nbsp;</p>
                  <h4>{item.qty}</h4>
                </div>
                <div className="cartpage__total">
                  <h4>{item.total}€</h4>
                </div>
              </li>
            ))}
          </ul>
          <div className="cartpage__order">
            <h3 className="cartpage__totalamount">{totalAmount}€</h3>
            <Link to='/' className='cartpage__orderbutton' onClick={()=> dispatch(clearcart())} >Order</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartPage;
