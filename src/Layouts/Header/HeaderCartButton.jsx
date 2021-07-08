import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./HeaderCartButton.module.css";
const HeaderCartButton = ({ onClick }) => {
  return (
    <div className={style.cart}>
      <AiOutlineShoppingCart />
      <div className={style.itemCount}>(3)</div>
    </div>
  );
};

export default HeaderCartButton;
