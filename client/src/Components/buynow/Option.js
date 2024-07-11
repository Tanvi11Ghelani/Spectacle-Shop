import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import Logincontext from "../context/ContextProvider";

const Option = ({ deletedata, get }) => {
  // const { account, setAccount } = useContext(Logincontext);
  // console.log(account);

  const removedata = async (id) => {
    try {
      const res = await fetch(`/remove/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log("error");
        alert("your product is not delete please signin again");
      } else {
        console.log("user delete");
        alert("item remove from carts");
        // setAccount(data);
        get();
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="add_remove_select">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => removedata(deletedata)}>
        Delete
      </p>
      <span>|</span>
      <p className="forremovemedia">Save Or Later</p>
      <span>|</span>

      <p className="forremovemedia">
        <NavLink to="/">See More Like this </NavLink>
      </p>
    </div>
  );
};

export default Option;
