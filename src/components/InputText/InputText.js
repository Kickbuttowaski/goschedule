import React from "react";
import PropTypes from "prop-types";
import style from "./InputText.module.css";
import delete_sign from "../../icons/delete_sign.svg";
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
      value
    } = this.props;

    return (
      <div className={style["input-icons"]}>
        <p className={style["header"]}>{label}</p>
        <i
          className={icon === undefined ? style["display-none"] : style["icon"]}
        >
          <img src={delete_sign} alt="user_profile"></img>
        </i>
        <input
          type={type}
          onChange={onChange || this.onChange}
          style={isMandatory === "true" ? { border: "solid 2px #FA383E" } : {}}
          className={
            icon === undefined ? style["inputArea"] : style["inputArea-icon"]
          }
          placeholder={placeHolder}
          value={value || this.state.value}
        />
        <p
          className={
            help === undefined ? style["display-none"] : style["helper"]
          }
        >
          {help}
        </p>
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
  placeHolder: "Enter text",
  value: "",
  isMandatory: false,
  type: "text",
  onKeyup: function() {
    //console.log("keyup");
  }
};
