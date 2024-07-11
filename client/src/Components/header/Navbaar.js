import React, { useState, useContext, useEffect } from "react";
import "./Navbaar.css";
import logo from "../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json;
    console.log(data);

    if (res.status !== 201) {
      console.log("error");
      // window.alert("Invalid Details 👎!");
    } else {
      console.log("data valid");
      setAccount(data);
      // setData({ ...logdata, email: "", password: "" });
      // window.alert("Login Successfully done 😃!");
    }
  };

  const [dropen, setDropen] = useState(false);

  const handleopen = () => {
    setDropen(true);
  };

  const handledrclose = () => {
    setDropen(false);
  };

  useEffect(() => {
    getdetailvaliduser();
  }, []);
  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleopen}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose}>
            <Rightheader logclose={handledrclose} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" placeholder="Search Spectacle" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/Login">Signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
            <p>Cart</p>
          </div>
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          account ?{" "}
          <h3 style={{ color: "white", fontWeight: "300" }}>
            Hello,{account.fname}
          </h3>
          :""
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
