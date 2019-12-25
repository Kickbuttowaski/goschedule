import React from "react";
import PropTypes from "prop-types";
import style from "./UserPicker.module.css";
import { man, man2, man3, girl, girl1 } from "../../icons/avatar";
import Badge from "./Badge";

export default class UserPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      isOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.removeBadge = this.removeBadge.bind(this);
  }

  handleChange(val) {
    let { onChange } = this.props;
    var selectedOption = this.state.selectedOption;
    selectedOption.push(val);
    this.setState({ selectedOption });
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
  removeBadge(badgeObj){
    
    var selectedOption = [...this.state.selectedOption]
    //console.log(selectedOption)
    selectedOption = selectedOption.filter(obj=>obj.value !== badgeObj.value)
    //console.log(selectedOption)
    this.setState({selectedOption})
  }
  render() {
    
    let { options, disabled = false } = this.props;
    const { isOpen, selectedOption = "", arrow } = this.state;
    let selectedLabel = null;
    console.log(selectedOption)
    let inputText=selectedOption.length !== 0? "add more people":"Enter people or Teams"
    let html = options.map((obj, i) => {
      return (
        <span
          key={i}
          className={style.dropdownList}
          onClick={this.handleChange.bind(this, obj)}
        >
          <img className={style.avatar} src={obj.avatar} />
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
          <div className={style.inputContainer}>
            <span >
              {selectedOption.map(obj => {
                return <Badge text={obj.value} avatar={obj.avatar} color="#f4f5f7" onClick={()=> this.removeBadge(obj)} />;
              })}
            <p className={style.selectedTxt}>{inputText}</p>
            </span>
          </div>
        </div>
        {isOpen ? <div className={style.selectDropdown}>{html}</div> : null}
      </div>
    );
  }
}

UserPicker.defaultProps = {
  options: [
    { value: "Rick", label: "Rick", avatar: man },
    { value: "Morty", label: "Morty", avatar: man2 },
    { value: "Perry", label: "Perry", avatar: man3 },
    { value: "The Platypus", label: "The Platypus", avatar: girl },
    { value: "Tadain", label: "Tadain", avatar: girl1 }
  ],
  disabled: false,
  dataId: "dropdownComp",
  selectedOption: "chocolate"
};
UserPicker.propTypes = {
  dataId: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array,
  selectedOption: PropTypes.string
};
