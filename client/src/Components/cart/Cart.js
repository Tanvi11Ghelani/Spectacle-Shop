import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import "./cart.css";
// import p1_img from "../Assets/product_1.png";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const Cart = () => {
  const { id } = useParams("");
  // console.log(id);

  const { account, setAccount } = useContext(LoginContext);

  const history = useNavigate("");

  const [inddata, setInddata] = useState([]);
  console.log(inddata);

  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log("no data available");
    } else {
      console.log("getdata");
      setInddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  //add cart function

  const addtocart = async (id) => {
    const check = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inddata,
      }),
      credentials: "include",
    });

    const data1 = await check.json();
    console.log(data1);

    //data male ke nahi check karo
    if (check.status === 401 || !data1) {
      console.log("user invalid");
      alert("user invalid");
    } else {
      alert("product is added in your cart");
      history("/buynow");
      setAccount(data1);
    }
  };

  return (
    <div className="cart_section">
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.url} alt="cart_img" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addtocart(inddata.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inddata.title.shortTitle}</h3>
            <h4>{inddata.title.longTitle}</h4>
            <Divider />
            <h3>Size : Large</h3>
            <h5 style={{ fontWeight: 400 }}>Frame + Lens</h5>
            <h5 style={{ fontWeight: 400 }} className="mrp">
              M.R.P : ${inddata.price.mrp}
            </h5>
            <h5 style={{ fontWeight: 400 }}>
              Deal of the day:{" "}
              <span style={{ color: "#B12704" }}>${inddata.price.cost}</span>
            </h5>
            <h5 style={{ fontWeight: 400 }}>
              You Save:{" "}
              <span style={{ color: "#B12704" }}>
                ${inddata.price.mrp - inddata.price.cost}(
                {inddata.price.discount})
              </span>
            </h5>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inddata.discount}</span>
              </h5>
              <h3>Technical Info</h3>
              <h5 style={{ color: "#111", fontWeight: 400 }}>
                Frame Size : Large
              </h5>
              <h5 style={{ color: "#111", fontWeight: 400 }}>
                Frame Width : 144 mm
              </h5>
              <h5 style={{ color: "#111", fontWeight: 400 }}>
                Frame colour : Gold
              </h5>
              <h5></h5>
              <h5></h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
