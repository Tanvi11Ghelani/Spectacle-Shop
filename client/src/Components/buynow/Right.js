import React, { useState, useEffect } from "react";
import logo from "../Assets/logoblack.png";
const Right = ({ item }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    totalAmount(); //jyare pan buy now nu page open thay tyare aa function call thayk
  }, [item]); // jetli var item call thay etli var aa useeffct ni method call thay

  const totalAmount = () => {
    let price = 0;
    item.map((item) => {
      price += item.price.cost + price;
    });
    setPrice(price);
  };

  return (
    <div className="right_buy">
      <img className="logo_buynow" src={logo} alt="" />
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery</p>
        <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout. Details
        </span>
        <h3 style={{ fontWeight: 500 }}>
          Subtotal ({item.length} items):{" "}
          <span style={{ fontWeight: 700 }}>${price}.00</span>
        </h3>
        <button className="rightbuy_btn">Process to Buy</button>
        <div className="emi">Emi available</div>
      </div>
    </div>
  );
};

export default Right;
