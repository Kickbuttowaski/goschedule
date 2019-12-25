import React from "react";
import style from "./Badge.module.css";

const Badge = ({ text, color }) => {
  return (
    <div style={{ background: color }} className={style.container}>
      {text}
    </div>
  );
};

export default Badge;
