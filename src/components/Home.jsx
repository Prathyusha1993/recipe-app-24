import React from "react";
import Popular from "./Popular";
import Veggies from "./Veggies";

const Home = () => {
  return (
    <div>
      {/* <a href="/">
        <img
          style={{
            display: "flex",
            objectFit: "contain",
            width: "100px",
            height: "50px",
          }}
          src="images/deliciousLogo.jpg"
          alt=""
        />
      </a>
      <input type="text" placeholder="Search Food" /> */}
      <Veggies />
      <Popular />
    </div>
  );
};

export default Home;
