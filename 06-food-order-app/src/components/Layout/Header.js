import React from "react";

import mealsImg from "../../assets/meals.jpg";
import MealsSummary from "../Meals/MealSummary";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton text="My Cart" />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delecious meals" />
      </div>
    </>
  );
};

export default Header;
