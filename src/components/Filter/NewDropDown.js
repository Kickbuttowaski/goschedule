import React from "react";
import PropTypes from "prop-types";
import style from "./NewDropDown.module.css";
import user_profile from "../../icons/dd_arrow_down.svg"

export default class NewDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "props.selectedOption",
      isOpen: false,
      arrow: "keyboard_arrow_down"
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

 
  handleChange(val) {
    let { onChange } = this.props;
    let arrow =
      this.state.arrow === "keyboard_arrow_down"
        ? "keyboard_arrow_up"
        : "keyboard_arrow_down";
    this.setState({ selectedOption: val, arrow });
    onChange && onChange(val);
  }

  toggleDropdown() {
    let arrow =
      this.state.arrow === "keyboard_arrow_down"
        ? "keyboard_arrow_up"
        : "keyboard_arrow_down";
    this.setState({
      isOpen: !this.state.isOpen,
      arrow
    },() => {
      document.addEventListener('click', this.hideDropdownMenu)});
  }
  hideDropdownMenu(){ this.setState({
    isOpen: false,
    arrow: "keyboard_arrow_down"
  },()=>{document.removeEventListener('click', this.hideDropdownMenu)});

  }
  render() {
    let { options, disabled = false } = this.props;
    const { isOpen, selectedOption = "", arrow } = this.state;
    let selectedLabel = null;
    let html = options.map((obj, i) => {
      if (selectedOption === obj.value && selectedLabel === null) {
        selectedLabel = obj.label;
      }
      return (
        <span
          key={i}
          className={style.dropdownList}
          onClick={this.handleChange.bind(this, obj.value)}
        >
          {obj.label}
        </span>
      );
    });
    return (
      <div className={style.selectContainer}>
        <div
          className={
            isOpen === true ? style.selectStyle_click : style.selectStyle
          }
          onClick={this.toggleDropdown}
        >
          <div>
            <span className={style.selectedTxt}>
              {selectedLabel || "Column"}
            </span>
          </div>
          
          <img
          src={user_profile}
          alt="user_profile"
          className={`${style.item2}  item1`}
        ></img>
        </div>
        {isOpen ? <div className={style.selectDropdown}>{html}</div> : null}
      </div>
    );
  }
}

NewDropDown.defaultProps = {
  options: [
    { value: "chocolate", label: "ChocolateChocolateChocolateChocolateChocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ],
  disabled: false,
  dataId: "dropdownComp",
  selectedOption: "chocolate"
};
NewDropDown.propTypes = {
  dataId: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array,
  selectedOption: PropTypes.string
};
