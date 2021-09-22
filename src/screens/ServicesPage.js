import React from "react";
import Navbar from "../components/Navbar";
import "./ServicesPage.css";
import Footer from '../components/Footer';

function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="services">
        <div className="services__header">
          <img
            src="https://www.uber-assets.com/image/upload/v1588108634/assets/ca/e6987f-a0fb-49b4-9248-f093d5778cf3/original/How_Uber_Eats_Works_media-DESKTOP-TABLET-MOBILE-19x9.jpg"
            alt="headerimage"
          />
        </div>
        <div className="services__header__text">
          <h1>How X works</h1>
          <p>With X you have all your favorite dishes delivered to you door.</p>
        </div>
        <div className="services__steps">
          <div className="services__step">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_413,h_275/v1588108653/assets/c5/1351dc-f9b7-4ab3-a184-b767a9c7539f/original/Browse_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg"
              alt="step"
            />
            <h4>Browse</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="services__step">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_413,h_275/v1588108669/assets/2a/861fdc-5d81-44c2-94cb-d87f395da1ef/original/Order_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg"
              alt="step"
            />
            <h4>Order</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="services__step">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_413,h_275/v1588108685/assets/19/f50269-466c-4b7e-8e78-1e2f4d50981a/original/Track_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg"
              alt="step"
            />
            <h4>Track</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServicesPage;
