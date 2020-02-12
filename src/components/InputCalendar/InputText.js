import React from "react";
import PropTypes from "prop-types";
import style from "./InputText.module.css";
import delete_sign from "../icons/delete_sign.svg";
import InputCalendar from './InputCalendar';
export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      show:false
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
  handleShow=()=>{
    this.setState({show:!this.state.show})
  }
 handleDate=(date)=>{
    
    let value=date.sDate + "/"+date.sMonth+ "/"+date.sYear
    //console.log(value)

    //this.onChange(value)
    this.setState({value});
    
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
      <React.Fragment>
        {this.state.show &&
        <div style={{position:"absolute",left:"250px",top:"65px"}}>
      <InputCalendar onSelectDate={this.handleDate}/>  
      </div>}
      <div className={style['input-holder']}>
        
      {label && <p className={style["input-holder__header"]}>{label}</p>}  
      <div>
        <i className={style["input-holder__icon--right"]} onClick={this.handleShow}>
          <img src={delete_sign} alt="user_profile"></img>
        </i>

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
      </React.Fragment>
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
