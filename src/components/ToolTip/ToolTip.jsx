import React from "react";
import style from "./ToolTip.module.css";
import { PropTypes } from 'prop-types';

const ToolTip = ({ text }) => {
  return (
    <div className={style.container}>
     {text}
      <div className={style.subContainer}></div>
    </div>
  );
};

export default ToolTip;

ToolTip.defaultProps = {
    text: "Sample tool tip"
  };
  ToolTip.propTypes = {
    text: PropTypes.string,
    
  };
  
