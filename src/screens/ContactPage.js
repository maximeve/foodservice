import React from "react";
import Navbar from '../components/Navbar';
import './ContactPage.css';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <>
    <Navbar />
    <div className="contactcontainer">
    <div className="contact">
      <div className="contact__img">
        <img
          src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="delivery"
        />
      </div>
      <div className="contact__form">
        <h1>Get in touch</h1>
        <p>Have an inquiry or some feedback for us?<br />Fill out the form below to contact our team.</p>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="8" cols="50" placeholder="Message" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
      <div className="contact__locations">
        <div><h3>Sydney</h3><p>48 Pirrana Rd.<br/>Pyrmont NSW 2009</p></div>
        <div><h3>Melbourne</h3><p>151 Collins St.<br/>Melbourne VIC 3000</p></div>
        <div><h3>Los Angeles</h3><p>340 Main St. Venice<br/>CA 90210 USA</p></div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
