import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
