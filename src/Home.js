import React from "react";
import Product from "./Product";
import banner from "./logo/banner.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="banner" />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovatio Creates Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://www.amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />

        <Product
          id="12321345"
          title="KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red"
          price={379.99}
          rating={4}
          image="https://www.amazon.com/images/I/81EYgXB%2BGOL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1232134156"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={319.99}
          rating={5}
          image="https://www.amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
        />

        <Product
          id="123213215"
          title="Apple Watch Series 4 (GPS + Cellular, 44MM) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
          price={369.99}
          rating={4}
          image="https://www.amazon.com/images/I/61HlzgZf4iL._AC_SL1500_.jpg"
        />

        <Product
          id="56789233"
          title="Apple MacBook Pro (16-Inch, 16GB RAM, 512GB Storage) - Space Gray"
          price={2099.0}
          rating={5}
          image="https://www.amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="33456981"
          title="SKYWORTH E20300 40 INCH 1080P LED A53 Quad-CORE Android TV Smart 40E20300 with Voice Control Smart Remote, 1mm Thin Bezel, and Android Operating System"
          price={598.96}
          rating={5}
          image="https://www.amazon.com/images/I/91FOClQ63EL._AC_SL1500_.jpg"
          //https://www.amazon.com/images/I/81X15A9dFPL._AC_SL1500_.jpg
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
