import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src="/assets/Foodlogo.png" id="footer__mainlogo"/>
        <img src="/assets/delivery.png" id="footer__deliverylogo"/>
      </div>
      <div className="footer__options">
        <div>
          <ul>
            <li>Get Help</li>
            <li>Add your restaurant</li>
            <li>Sign up to deliver</li>
            <li>Create a business account</li>
            <li>Save on your first order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Restaurants near me</li>
            <li>View all cities</li>
            <li>View all countries</li>
            <li>Read our blog</li>
            <li>About Uber Eats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
