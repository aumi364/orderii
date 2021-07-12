import React from "react";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartitems}
      <div className={classes.total}>
        <span> Total Amount</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
