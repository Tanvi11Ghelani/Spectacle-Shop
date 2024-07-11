import React from "react";
import "./newarrivals.css";
import w1 from "../Assets/womenpic1.jpg";
import c1 from "../Assets/chilspic1.jpg";
import m1 from "../Assets/menpic1.jpg";

const Newarrivals = () => {
  return (
    <div>
      <div className="banner">
        <img className="img" src={w1} alt="" />
        <img className="img" src={c1} alt="" />
        <img className="img" src={m1} alt="" />
      </div>
      <div className="offer-text1 offer-text">
        Buy 1 Get 1 with Gold membership
      </div>
      <div className="title">
        <h3>Women Spectacle</h3>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://i.ibb.co/CzyjbXc/wproduct-1.png"
            alt="Project 1"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">LensKart Air</h2>
            <p class="card-discount">10% Off</p>
            <p class="card-tagline">Limited time offer</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/WnsJRXP/wproduct-2.png"
            alt="Project 2"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Blue Full Rim Square</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/Qk7WZbR/wproduct-3.png"
            alt="Project 3"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Vincent</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
      </div>
      <div className="offer-text1 offer-text">
        Buy 1 Get 1 with Gold membership
      </div>
      <div className="title">
        <h3>Kids Spectacle</h3>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://i.ibb.co/9qpZrVq/kproduct-1.png"
            alt="Project 1"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">LensKart Air</h2>
            <p class="card-discount">10% Off</p>
            <p class="card-tagline">Limited time offer</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/PYx2JjN/kproduct-2.png"
            alt="Project 2"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Blue Full Rim Square</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/VNbzjWs/kproduct-3.png"
            alt="Project 3"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Vincent</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
      </div>
      <div className="offer-text1 offer-text">
        Buy 1 Get 1 with Gold membership
      </div>
      <div className="title">
        <h3>Men Spectacle</h3>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://i.ibb.co/mFXGwZt/mproduct-1.png"
            alt="Project 1"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">LensKart Air</h2>
            <p class="card-discount">10% Off</p>
            <p class="card-tagline">Limited time offer</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/NZKV3kS/mproduct-2.png"
            alt="Project 2"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Blue Full Rim Square</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/3vZHfL0/mproduct-3.png"
            alt="Project 3"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Vincent</h2>
            <p class="card-discount">20% Off</p>
            <p class="card-tagline">Special promotion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrivals;
