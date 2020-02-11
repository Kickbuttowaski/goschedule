import React from "react";
import PropTypes from "prop-types";
import style from "./NewDropDown.module.css";
import user_profile from "../icons/dd_arrow_down.svg";

export default class NewDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      isOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  handleChange(val) {
    let { onChange } = this.props;
    this.setState({ selectedOption: val });
    onChange && onChange(val);
  }

  toggleDropdown() {
  
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      () => {
        document.addEventListener("click", this.hideDropdownMenu);
      }
    );
  }
  hideDropdownMenu() {
    this.setState(
      {
        isOpen: false
      },
      () => {
        document.removeEventListener("click", this.hideDropdownMenu);
      }
    );
  }
  render() {
    let { options } = this.props;
    const { isOpen, selectedOption = "" } = this.state;
    let selectedLabel = null;
    let html = options.map((obj, i) => {
      if (selectedOption === obj.value && selectedLabel === null) {
        selectedLabel = obj.label;
      }
      return (
        <p
          key={i}
          className={style['dropdown-list__item']}
          onClick={this.handleChange.bind(this, obj.value)}
        >
          {obj.label}
        </p>
      );
    });
    return (
      <div className={style['dropdown']}>
        <div
          className={
            isOpen === true ? style["dropdown__sub--open"] : style["dropdown__sub"]
          }
          onClick={this.toggleDropdown}
        >
          <div className={style["dropdown__textcontainer"]}>
            
            <span className={style["textcontainer__selected-text"]}>
              {selectedLabel === null
                ? "Select any value"
                : selectedLabel}
            </span>
          </div>
          <div className={style["textcontainer__arrow"]}>
            <img src={user_profile} alt="user_profile"></img>
          </div>
        </div>
        {isOpen ? <div className={style["dropdown__dropdown-list"]}>{html}</div> : null}
      </div>
    );
  }
}

NewDropDown.defaultProps = {
  options: [
    {
      value: "chocolatechocolate",
      label: "Chocolate"
    },
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
