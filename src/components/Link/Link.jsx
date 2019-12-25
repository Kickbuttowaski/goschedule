import React from "react";
import style from "./Link.module.css";
import { PropTypes } from "prop-types";

const Link = ({ children, link, target, isDisabled }) => {
  return (
    <a
      href={link}
      target={target}
      className={
        isDisabled === "true" ? style["anchor-disabled"] : style["anchor"]
      }
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  target: "_self"
};

Link.propTypes = {
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  href: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default Link;
