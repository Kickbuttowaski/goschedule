import React from "react";
import style from "./ToggleSwitch.module.css"
import { PropTypes } from 'prop-types';

const ToggleSwitch = ({text}) => {
  return (
    <label className={style.switch}>
    <input type="checkbox" /> 
      <span className={`${style.slider} ${style.round}`}></span>  
      <p className={style.textStyle}>{text}</p>
  </label>
  
  
  );
};

export default ToggleSwitch;
ToggleSwitch.defaultProps = {
  text: "Sample toggle"
};
ToggleSwitch.propTypes = {
  text: PropTypes.string,
  
};

