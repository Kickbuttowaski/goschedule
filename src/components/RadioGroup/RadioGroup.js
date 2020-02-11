import React from "react";
import PropTypes from "prop-types";
import style from "./RadioGroup.module.css";
export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption
    };
  }

  handleOptionChange(id,data) {
   var {onChange} = this.props;
    this.setState({
      selectedOption: id
    });
    onChange && onChange(id, data);
  }

  render() {
    let {options} = this.props;
    let optionHtml = options.map((obj, i) => {
      return (
        <label key={i} className={style['radio-button']}  >
          {obj.value}
          <input
            type="radio"
            checked={this.state.selectedOption === obj.id}
            name="radio"
            onClick={this.handleOptionChange.bind(this, obj.id, obj)}
          />
          <span
            className={style['radio-button__checkmark']}
            value={obj.value}
            id={obj.id}
          
          ></span>

        </label>
      );
    });
    return <div className={style['radio-group']}>{optionHtml}</div>;
  }
}

RadioGroup.defaultProps = {
  isChecked: false,
  disabled: false,
  dataId: "checkBoxComp",
  label: "CheckBox",
  onChange:(id,data)=>{
    console.log("inbuilt",id,data)
  },
  options:[ { id: "option1", value: "Option 1" },
  { id: "option2", value: "Option 2" },
  { id: "option3", value: "Option 3" },
  { id: "option4", value: "Option 4" }]
};
RadioGroup.propTypes = {
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  dataId: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
};
