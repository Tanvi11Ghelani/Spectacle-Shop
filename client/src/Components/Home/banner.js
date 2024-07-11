import React from "react";
import "./banner.css";
import Carousel from "react-material-ui-carousel";
import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
const data = [b1, b2];
const banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          color: "black",
          // borderRadius: 0,
          // height: 60,
          marginTop: -20,
        },
      }}
    >
      {data.map((imag, i) => {
        return (
          <>
            <img src={imag} alt="" className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default banner;
