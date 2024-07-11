import React from "react";
import "./accessories.css";
const Accessories = () => {
  return (
    <div className="ac">
      <div className="scim1">Buy 1 Get 1 with Gold membership</div>
      <div className="offer-text1 offer-text">
        Buy 1 Get 1 with Gold membership
      </div>
      <div className="title">
        <h3>SunGlasses</h3>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://i.ibb.co/6wsrDL5/accessories-1.png"
            alt="Project 1"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Black Focus</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">$100</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/VVRjCjM/accessories-2.png"
            alt="Project 2"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">Silver Square</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">$60</p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://i.ibb.co/DfPcwKR/accessories-3.png"
            alt="Project 3"
            class="card-image"
          />
          <div class="card-content">
            <h2 class="card-title">black Vincent</h2>
            <p class="card-discount">Deal of the day</p>
            <p class="card-tagline">$88</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
