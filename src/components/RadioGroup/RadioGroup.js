import React from "react";
import PropTypes from "prop-types";
import style from "./RadioGroup.module.css";
export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(data) {
    console.log( data);
    this.setState({
      selectedOption: data
    });
  }

  render() {
    let {
      options = [
        { id: "option1", value: "Option 1" },
        { id: "option2", value: "Option 2" },
        { id: "option3", value: "Option 3" },
        { id: "option4", value: "Option 4" }
      ]
    } = this.props;
    let optionHtml = options.map((obj, i) => {
      return (
        <label key={i} className={style.container}>
          {obj.value}
          <input
            type="radio"
            checked={this.state.selectedOption === obj.id}
            name="radio"
          />
          <span
            className={style.checkmark}
            value={obj.value}
            id={obj.id}
            onClick={()=>this.handleOptionChange(obj.id)}
          ></span>
        </label>
      );
    });
    return <div className={style.m4}>{optionHtml}</div>;
  }
}

RadioGroup.defaultProps = {
  isChecked: false,
  disabled: false,
  dataId: "checkBoxComp",
  label: "CheckBox"
};
RadioGroup.propTypes = {
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  dataId: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
};
