import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
import user_profile from "./../icons/user_profile.svg"

export default class Button extends React.Component {
  render() {
    let { text, size, onClick, type, dataId, icon:iconName } = this.props;
    let icon = size === "medium" ? "icon" : "icon-" + size;
    //type = iconName === undefined ? type : "primaryicon";
    if (type==="disabled")
      type = iconName !==undefined ? "disabled_icon":"disabled"
    else if(iconName !==undefined)
      type=type+"icon"
  
  
    return (
      <div onClick={onClick} className={style["input-icons"]}>
       
        <button
          className={`${style[type.toLowerCase()]} ${
            style[size.toLowerCase()]
          } `}
          data-id={dataId}
          type="button"
        >
          {text}
          <i
          className={
            iconName === undefined ? style["display-none"] : style[icon]
          }
        >
         <img  src={user_profile} />
        </i>
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  size: "medium",
  text: "Button",
  onClick: function()  {
    console.log("clicked");
  },
  dataId: "buttonComp",
  type: "primary"
};
Button.propTypes = {
  dataId: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string
};
