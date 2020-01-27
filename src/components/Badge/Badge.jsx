import React from "react";
import style from "./Badge.module.css";
import PropTypes from "prop-types";

const Badge = ({ text, color }) => {
  return (
    <div style={{ background: color }} className={style['badge']}>
      {text}
    </div>
  );
};

export default Badge;


Badge.defaultProps = {
  color: "ffd4d1",
  text: "xxxx"
};
Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};
