import React from "react";
import Navbar from "../components/Navbar";
import './AccountPage.css';

function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="profileScreen__body">
        <h1>Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Profile"
          />
          <div className="profileScreen__details">
            <h2>USER</h2>
            <div className="profileScreen__plans">
              <h3>Info</h3>
              <p>Street : Mandemakersstraat 2117</p>
              <p>City : Wetteren</p>
              <p>State/Province : East Flanders</p>
              <p>Zip : 9230</p>
              <p>Phone Number : 0498 67 72793</p>
              <p>E-mail : 67wawvn7g0x@temporary-mail.net</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
