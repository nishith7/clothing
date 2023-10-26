import React from "react";
import NavBar from "./Navbar";
import HeroComponent from "./HeroComponent";
import DealOftheDay from "./DealOftheDay";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const Home = () => {
  return (
    // <>
    <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
    <NavBar />
      <HeroComponent />
      <DealOftheDay />
      <Categories />
      <AboutUs />
      <Footer />

    </div>
    
    // </>
  );
};

export default Home;
