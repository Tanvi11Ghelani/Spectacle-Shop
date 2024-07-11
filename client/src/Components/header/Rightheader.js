import React, { useContext } from "react";
import "./rightheader.css";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const Rightheader = ({ logclose }) => {
  const { account, setAccount } = useContext(LoginContext);
  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          account ? <h3>Hello,{account.fname}</h3>:""
        </div>
        <div className="nav_btn" onClick={logclose}>
          <NavLink to="/">Home</NavLink>
          <Divider style={{ width: "100", marginLeft: "-20px" }} />
          <NavLink to="/NewArrivals">New Arrivals</NavLink>
          <NavLink to="/Sunglasses">Sun Glasses</NavLink>
          <NavLink to="/Accessories">Accessories</NavLink>
          <Divider style={{ width: "100", marginLeft: "-20px" }} />
          {/* {account ? ( */}
          <NavLink to="/buynow">Your orders</NavLink>
          {/* ) : (
            <NavLink to="/Login">Your orders</NavLink>
          )} */}
          <Divider style={{ width: "100", marginLeft: "-20" }} />
          <NavLink to="/Contact">About us & contact us</NavLink>
        </div>
      </div>
    </>
  );
};

export default Rightheader;
