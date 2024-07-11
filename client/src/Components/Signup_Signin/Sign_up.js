import React, { useState } from "react";
import "./signup.css";
import logo from "../Assets/logoblack.png";
import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const Sign_up = () => {
  // const history = useHistory();
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;

    // if (fname === "") {
    //   window.alert("😲please enter your name");
    // } else if (email === "") {
    //   window.alert("😲please enter your email");
    // } else if (mobile === "") {
    //   window.alert("😲please enter your mobile");
    // } else if (password === "") {
    //   window.alert("😲please enter your password");
    // } else {
    //   window.alert("😲please enter your details");
    // }

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        mobile,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      alert("no data");
    } else {
      setUdata({
        ...udata,
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
      alert("data add successfully");
      // history.push("/Login");
    }
  };

  // const senddata = async (e) => {
  //   e.preventDefault();
  //   const { fname, email, mobile, password, cpassword } = udata;

  //   const res = await axios({
  //     method: "post",
  //     url: "",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fname,
  //       email,
  //       mobile,
  //       password,
  //       cpassword,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={logo} alt="tyn" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>SignUp</h1>
              <div className="form_data">
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  onChange={adddata}
                  // onChange={(e)=>setUdata({...udata,email:e.target.value})}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  placeholder="Atleast 6 Character "
                  id="password"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Password Again</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <button className="signin_btn" onClick={senddata}>
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/Login">Sign in</NavLink>
              </div>
            </form>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </section>
    </>
  );
};

export default Sign_up;
