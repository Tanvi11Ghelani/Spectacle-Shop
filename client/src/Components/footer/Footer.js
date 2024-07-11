import React from "react";
import "./footer.css";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Shop</h3>
          <NavLink to="/Newarrivals">
            <p>EyeGlasses for Men</p>
          </NavLink>
          <NavLink to="/Newarrivals">
            <p>EyeGlasses for Women</p>
          </NavLink>
          <NavLink to="/Newarrivals">
            <p>EyeGlasses for Kids</p>
          </NavLink>
        </div>
        <div className="footr_details_one">
          <h3>Services</h3>
          <p>Shipping & Exchange</p>
          <p>About us</p>
          <p>Terms of use</p>
          <p>private policy</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Help</h3>
          <p>Buying Guide</p>
          <p>WhatsApp:+91 23456 23456</p>
          <p>Email:Focus-Frame@gmail.com</p>
        </div>
      </div>
      <div className="horizontalline forres"></div>
      <img className="logo_img" src={logo} alt="" />
      <p>Copyrights @ {year} -All Rights</p>
      <div className="follow forres">
        Follow Us
        <NavLink to="/Contact">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-pinterest"></i>
          <i class="fa-brands fa-telegram"></i>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
