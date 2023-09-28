import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/keysight-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="Keysight-Logo" className={classes.logo} />
      <div className="list">
        <Link className={classes.listitem}>File</Link>
        <Link className={classes.listitem}>Settings</Link>
        <Link className={classes.listitem}>View</Link>
        <Link className={classes.listitem}>Help</Link>
      </div>
    </nav>
  );
};

export default Navbar;
