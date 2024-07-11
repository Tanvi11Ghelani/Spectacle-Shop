import React, { useState, useEffect } from "react";

const Subtotal = ({ item }) => {
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
    <div className="sub_item">
      <h3>
        Subtotal ({item.length} items):{" "}
        <strong style={{ fontWeight: 700, color: "#111" }}>${price}</strong>
      </h3>
    </div>
  );
};

export default Subtotal;
