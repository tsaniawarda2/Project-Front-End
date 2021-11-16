import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Home/Slider";
import Categories from "../components/Home/Categories";
import Product from "../components/Home/Product";
import Newsletter from "../components/Home/Newsletter";
import "../assets/styles/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="ttl-cat">categories</div>
      <Categories />
      <div className="our-prod">Our Products</div>
      <Product />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
