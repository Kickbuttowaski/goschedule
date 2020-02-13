import React,{useState} from "react";
import style from "./ToggleSwitch.module.css"
import { PropTypes } from 'prop-types';

const ToggleSwitch = ({text,onChange}) => {
  const [toggle,setToggle]=useState(true)
  function handleChange(){
   setToggle(!toggle)
   onChange && onChange(toggle)
   //console.log(toggle)
  }
  return (
    <label className={style.switch}>
    <input type="checkbox" onChange={handleChange}/> 
      <span className={`${style.slider} ${style.round}`}></span>  
      <p className={style.textStyle}>{text}</p>
  </label>
  
  
  );
};

export default ToggleSwitch;
ToggleSwitch.defaultProps = {
  text: "Sample toggle",
  onChange:function(){console.log()},
  defaultState:false
};
ToggleSwitch.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};

