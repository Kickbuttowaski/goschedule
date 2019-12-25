import React from "react";
import style from "./GroupLink.module.css";
import { PropTypes } from 'prop-types';

const LinkGroup = ({ children, direction }) => {
  return (
    <div className={`${style[direction.toLowerCase()]}`}>
      {children.map(tag => tag)}
    </div>
  );
};

LinkGroup.defaultProps = {
  direction: "col"
};

LinkGroup.propTypes = {
  direction: PropTypes.oneOf(["row", "col"]),
};

export default LinkGroup;
