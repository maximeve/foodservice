import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
    </div>
  );
}

export default Home;
