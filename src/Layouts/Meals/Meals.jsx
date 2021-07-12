import React from "react";

import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";
const Meals = () => {
  return (
    <section className={classes.mealsContainer}>
      <AvailableMeals />
    </section>
  );
};

export default Meals;
