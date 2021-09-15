import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Banner from "../components/Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Popular />
      <Banner />
    </div>
  );
}

export default Home;
