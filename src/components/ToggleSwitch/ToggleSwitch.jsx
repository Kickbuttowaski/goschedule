import React from "react";
import style from "./ToggleSwitch.module.css"

const ToggleSwitch = () => {
  return (
    <label className={style.switch}>
    <input type="checkbox" /> 
      <span className={`${style.slider} ${style.round}`}></span>
  </label>
  
  );
};

export default ToggleSwitch;
