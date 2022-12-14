import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => navData.isActive && classes.active}
              to="/welcome"
            >
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => navData.isActive && classes.active}
              to="/products"
            >
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
