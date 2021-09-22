import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Popular />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
