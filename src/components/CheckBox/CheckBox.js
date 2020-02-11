import React from "react";
import PropTypes from "prop-types";
import style from "./CheckBox.module.css";
export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: []
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    var { isChecked } = this.state;
    var {onChange} = this.props;
    if (isChecked.indexOf(e) !== -1) {
      isChecked = isChecked.filter(data => data != e);
    } else {
      isChecked.push(e);
    }
    this.setState({
      isChecked
    });
    onChange && onChange(isChecked)
  }

  render() {
    let { disabled,options } = this.props;
   
    let optionHtml = options.map((obj, i) => {
      return (
        <label key={i} className={style['check-box__each']} >
          {obj.value}
          <input type="checkbox" name="checkbox"   onClick={() => this.onChange(obj)}/>
          <span
            className={style['check-box__checkmark']}
            value={obj.value}
            id={obj.id}
          
          ></span>
        </label>
      );
    });
    return <div className={style['check-box']}>{optionHtml}</div>;
  }
}

CheckBox.defaultProps = {
 options:[ { id: "option1", value: "Option 1" },
 { id: "option2", value: "Option 2" },
 { id: "option3", value: "Option 3" },
 { id: "option4", value: "Option 4" }],
onChange:(data)=>{
  console.log(data)
}}
CheckBox.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.number
  })
};
