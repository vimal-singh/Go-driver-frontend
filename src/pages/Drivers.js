import React from "react";
import { Link } from "react-router-dom";
import classes from "./driver.module.css";

const drivers = [
  { id: 1, name: "N5182A" },
  { id: 2, name: "N6705C" },
  { id: 3, name: "N5184B" },
  { id: 4, name: "N9040B" },
];

const Drivers = () => {
  return (
    <div>
      <ul className={classes.list}>
        {drivers.map((driver) => (
          <li key={driver.id} className={classes.item}>
            <Link style={{ color: "white" }} to="/driver">
              {driver.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drivers;
