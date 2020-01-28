import React from "react";
import PropTypes from "prop-types";
import style from "./InputText.module.css";
import delete_sign from "../icons/delete_sign.svg";
export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    });
  }

  onChange(e) {
    let { onKeyup } = this.props;
    this.setState({value: e.target.value});
    onKeyup && onKeyup(e.target.value);
  }

  render() {
    let {
      placeHolder = "Enter text",
      isMandatory = false,
      label,
      help,
      icon,
      type = "text",
      onChange,
      value,
      icon_position
    } = this.props;
    let text_style = "input-area__icon--"+icon_position
    return (
      <div className={style['input-holder']}>

      {label && <p className={style["input-holder__header"]}>{label}</p>}  
      <div>
       {icon &&  <i className={icon_position === "right" ? style["input-holder__icon--right"]:style["input-holder__icon"]}>
          <img src={delete_sign} alt="user_profile"></img>
        </i>}

        <input
          type={type}
          onChange={onChange || this.onChange}
          style={isMandatory === true ? { border: "solid 2px #FA383E" } : {}}
          className={
            icon === undefined ? style["input-area"] : style[text_style]
          }
          placeholder={placeHolder}
          value={value || this.state.value}
        />
        {help && <p className={isMandatory ===true? style["input-holder__helper--red"]:style["input-holder__helper"]}>
          {help}
          </p>}
          </div>
      </div>
    );
  }
}

InputText.propTypes = {
  placeHolder: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onKeyup: PropTypes.func,
  isMandatory: PropTypes.bool
};

InputText.defaultProps = {
  icon_position:"left",
  placeHolder: "Enter text",
  value: "",
  isMandatory: false,
  type: "text",
  onKeyup: function() {
    //console.log("keyup");
  }
};
