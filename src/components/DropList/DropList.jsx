import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./DropList.module.css";

class DropList extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, selectedOption: {} };
    this.handleClick = this.handleClick.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen }, () =>
      document.addEventListener("click", this.hideDropdownMenu)
    );
  }
  hideDropdownMenu() {
    this.setState({ isOpen: false }, () =>
      document.removeEventListener("click", this.hideDropdownMenu)
    );
  }

  render() {
    const { isOpen, selectedOption } = this.state;
    const { options, onClick,text } = this.props;
    return (
      <div>
        <div className={style["parent"]} onClick={this.handleClick}>
          {text}
        </div>
        <div className={`${style.menu}`}>
          {isOpen &&
            options.map(data => (
              <span
                className={style.menuitems}
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
