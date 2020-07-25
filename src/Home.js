import React from "react";
import Product from "./Product";
import banner from "./logo/banner.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="banner" />
      {/* Product id, title, price, rating, image */}
      <Product
        id="12321341"
        title="The Lean Startup: How Constant Innovatio Creates Successful Business Paperback"
        price={11.96}
        rating={5}
        image="https://www.amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      {/* Product */}
    </div>
  );
}

export default Home;
