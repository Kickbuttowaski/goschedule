import React, { Component } from "react";
import style from "./Filter.module.css";
import InputText from "./InputText";
import Icon from "@material-ui/core/Icon";
import NewDropDown from "./NewDropDown";
import Button from "../Button/Button"
import _ from "lodash";
import filterLogic from './filterLogic';
import PropTypes from "prop-types";

class Filter extends Component {
  state = {
    filterVal: [{ inputVal: "", dropDown1: "", dropDown2: "" }],
    more: false,
    counter: 0,
    flag: false
  };
  handleInput = (e, index) => {
    var filterVal = [...this.state.filterVal];
    filterVal[index].inputVal = e.currentTarget.value;
    this.setState({ filterVal,flag:false });
  };
  handleDropdown =(val,index,ddown)=>{
    var dropDown = ddown === "d1" ?"dropDown1" :"dropDown2"
    var filterVal = [...this.state.filterVal];
    filterVal[index][dropDown] = val;
    this.setState({ filterVal,flag:false });
  }
  handleClick=()=>{
    let { onFilter } = this.props;
    let tempRes = filterLogic(this.state.filterVal,this.props.dbData)
    onFilter && onFilter(tempRes)
  }
  setStatus = () => {
    var { filterVal } = this.state;
    filterVal.push({ inputVal: "", dropDown1: "", dropDown2: "" });
    this.setState({filterVal})
};

  render() {
    const options = ["contains", "is equal to", "not equal to"];
    const { more, counter, filterVal } = this.state;
    return (
      <div className={style.main_container}>
      { filterVal.map((data, index) =>  
      <div className={style.container}>
        <NewDropDown
        options={this.props.options} 
         onChange={(val)=>this.handleDropdown(val,index,"d1")}/>
        <NewDropDown
        options={[
          { accessor: "c",Header: "contains" },
          { accessor: "dc", Header: "doesn't_contain" },
          { accessor: "s", Header: "starts with" },
          {accessor: "e", Header: "ends with"}
        ]}
         onChange={(val)=>this.handleDropdown(val,index,"d2")}/>
        <InputText
          onChange={e => this.handleInput(e, index)}
          value={filterVal[index].inputVal}
        />
        <Icon onClick={this.setStatus}>add</Icon>
         <Icon>clear</Icon> 
         
      </div>
    ) }
    <Button text="Okay" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Filter;

Filter.defaultProps = {

};
Filter.propTypes = {
  options: PropTypes.array
};
