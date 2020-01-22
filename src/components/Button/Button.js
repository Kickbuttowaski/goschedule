import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
import user_profile from "./../icons/user_profile.svg"

export default class Button extends React.Component {
  handleClick=()=>{
   var {onClick} =this.props;
   onClick && onClick()
    }
  render() {
    
    let { text, size, onClick, type, dataId, icon:iconName,disabled,icon_position } = this.props;
    let icon = size === "medium" ? "icon"+icon_position : "icon-" + size + "-"+icon_position;
    var opacity = disabled === true ? "0.3":"1"
    //icon_position = icon_position.toLowerCase() === "right" ? "left": "right"
    var icon_style = icon_position.toLowerCase() === "left" ? "icon_left": "icon_right"
    if (disabled)
      type = iconName !==undefined ? "disabled_icon_"+type:"disabled_"+type
    else if(iconName !==undefined)
      type=type+"icon"
  
    return (
      <div onClick={this.handleClick} className={style["input-icons"]}>
   
        <button 
          className={`${style[type.toLowerCase()]} ${
            style[size.toLowerCase()]
          }`}
          data-id={dataId}
          type="button"
          disabled={disabled}
          >
          {icon_position === "right"? text:''}
          {iconName &&   <i style={{opacity:opacity}} className={style[icon_style]}>
         <img  src={user_profile} />
        </i>}
        {icon_position === "left"? text:''}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  size: "medium",
  text: "Button",
  dataId: "buttonComp",
  type: "primary",
  disabled:false,
  icon_position:"left",
  onClick:()=>{
    console.log("Default click")
  }
};
Button.propTypes = {
  dataId: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string
};
