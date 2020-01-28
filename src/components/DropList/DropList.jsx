import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./DropList.module.css";

class DropList extends Component {
  state = { isOpen: false, selectedOption: {} };
  

  handleClick=()=> {
    this.setState({ isOpen: !this.state.isOpen }, () =>
      document.addEventListener("click", this.hideDropdownMenu)
    );
  }
  hideDropdownMenu=()=> {
    this.setState({ isOpen: false }, () =>
      document.removeEventListener("click", this.hideDropdownMenu)
    );
  }

  render() {
    const { isOpen, selectedOption } = this.state;
    const { options, onClick,text } = this.props;
    return (
      <div>
        <div className={style['droplist']} onClick={this.handleClick}>
          {text}
        </div>
        <div className={style['droplist__menu']}>
          {isOpen &&
            options.map(data => (
              <span
                className={style['droplist__menuitems']}
                key={data.value || data}
                value="as"
                onClick={()=>onClick(data)}
              >
                {data.label || data}
              </span>
            ))}
        </div>
      </div>
    );
  }
}

DropList.defaultProps = {
  options: [
    { value: "sample1", label: "SAMPLE-1" },
    { value: "sample2", label: "SAMPLE-2" },
    { value: "sample3", label: "SAMPLE-3" }
  ],
  text:"...",
  dataId: "dropdownComp",
  onClick: function(data) {
    console.log(data);
  }
};
DropList.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.number
  }),
  handleClick: PropTypes.func,
  handleSelect: PropTypes.func,
  onClick: PropTypes.func
};
export default DropList;
