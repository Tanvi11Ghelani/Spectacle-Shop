import React from "react";
import "./sunglasses.css";
import s1 from "../Assets/sung1.png";
import s2 from "../Assets/sung2.png";
const Sunglasses = () => {
  return (
    <div>
      <div className="scim1">Buy 1 Get 1 with Gold membership</div>
      <div className="bannersun">
        <img className="img" src={s1} alt="" />
        <img className="img" src={s2} alt="" />
      </div>
      <div className="offer-text1 offer-text">
        Buy 1 Get 1 with Gold membership
      </div>
      <div className="title">
        <h3>SunGlasses</h3>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://i.ibb.co/z6kWQ6L/sunproduct-1.png"
            alt="Project 1"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Gold Full Rim Round</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">Frame + Lens</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/w0mZ7VP/sunproduct-2.png"
            alt="Project 2"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Blue Full Rim Square</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/23WkwqH/sunproduct-3.png"
            alt="Project 3"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Vincent</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">Frame + Lens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunglasses;
