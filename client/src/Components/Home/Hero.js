import React from "react";
import "./Hero.css";
import heroimge from "../Assets/HERO1.jpg";
const Hero = () => {
  return (
    <div className="Home page">
      <div className="hero-section">
        <img className="img" src={heroimge} alt="" />
        <div className="text-btn">
          <div className="text">Find your Spectacles</div>
          <div className="latest-btn">
            {/* <Link to="/NewArrivals"> */}
            <button>
              Latest Glasses<i class="fa-solid fa-arrow-right"></i>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="heromsg">
        Discover our new arrivals that combine style and functionality for the
        perfect vision solution.
      </div>
    </div>
  );
};

export default Hero;
