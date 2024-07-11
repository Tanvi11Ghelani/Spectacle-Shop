import React, { useEffect } from "react";
import "./home.css";
import Banner from "./banner";
import Slide from "./Slide";
import Hero from "./Hero";
import center_img from "../Assets/center_img.jpg";
import center_img1 from "../Assets/center_img1.jpg";
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const Maincomponent = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className=".">
      <div className="hero_section">
        <Hero />
      </div>
      <div className="home_section">
        <div className="offer-text">
          <h1>Buy 1 Get 1 Free With Gold membership</h1>
        </div>
        <div className="banner_part">
          <Banner />
        </div>
        <div className="slide_part">
          <Slide title="JOHN JACOBS STARTING AT $188" products={products} />
        </div>
        <Slide title="EXTRA 60% OFF | VOUCHER: NEW60" products={products} />
        <div className="center">
          <div className="center_img">
            <img src={center_img1} alt="" />
          </div>
          <div className="center_img">
            <img src={center_img} alt="" />
          </div>
        </div>
        <div className="center_text">
          <h1>Get New Fashion By FOCUS FRAME</h1>
        </div>
        <Slide title="BEST SELLERS STARTING AT $88" products={products} />
      </div>
    </div>
  );
};

export default Maincomponent;
