import React from "react";
import style from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={style.btnEclipse}>
      {children}
    </button>
  );
};

export default Button;
