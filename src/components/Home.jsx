import React from "react";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <a href="/">
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
      <input type="text" placeholder="Search Food" />
      <Popular />
    </div>
  );
};

export default Home;
