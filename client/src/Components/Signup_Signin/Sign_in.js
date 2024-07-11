import React, { useState, useContext } from "react";
import "./signup.css";
import logo from "../Assets/logoblack.png";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });
  console.log(logdata);

  const { account, setAccount } = useContext(LoginContext);

  //get value
  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value); console ma jova mate

    //setvalue
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    // console.log(email);
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log("invalid details");
        window.alert("Invalid Details 👎!");
      } else {
        // setAccount(data);
        setData({ ...logdata, email: "", password: "" });
        setAccount(data);
        window.alert("Login Successfully done 😃!");
      }
    } catch (error) {
      console.log("login page ka error" + error.message);
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={logo} alt="tyn" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>SignIn</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                  placeholder="Atleast 6 Character "
                  id="password"
                />
              </div>
              <button type="submit" className="signin_btn" onClick={senddata}>
                Continue
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <h4 className="create_account">New To Focus Frame</h4>
            <NavLink to="/Register">
              <button style={{ height: 50 }} className="new_account">
                Create Your Account
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
