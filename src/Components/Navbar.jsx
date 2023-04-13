import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomContext } from "./Context";

const Navbar = () => {
  const { state, setState } = CustomContext();
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyleType: "none",
      }}
    >
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/tech">
        <li>Technologies</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/product">
        <li>Product</li>
      </Link>
      <button
        onClick={() => {
          setState(false);
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
