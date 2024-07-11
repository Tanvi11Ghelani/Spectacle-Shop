import React from "react";
import "./newnavbaar.css";
import { NavLink } from "react-router-dom";
const newnavbaar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          {/* <p>
            <i className="fas fa-shopping-cart"></i> All
          </p> */}
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/Newarrivals">
            <p>NewArrivals</p>
          </NavLink>
          <NavLink to="/Sunglasses">
            <p>Sunglasses</p>
          </NavLink>
          <NavLink to="/Accessories">
            <p>Asseccories</p>
          </NavLink>
        </div>
        <div className="right_data">
          <NavLink to="./Contact">
            <p>About as & Contact as</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default newnavbaar;
