import React from "react";
import classes from "./mainnavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.mainlistitem}>
          <NavLink to="drivers" style={{ color: "white" }}>
            Drivers
          </NavLink>
        </li>
        <li className={classes.mainlistitem}>
          <NavLink to="connections" style={{ color: "white" }}>
            Connections
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
