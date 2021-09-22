import React from "react";
import Navbar from "../components/Navbar";

function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Profile"
          />
          <div className="profileScreen__details">
            <h2>USER</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
