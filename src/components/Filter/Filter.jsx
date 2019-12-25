import React, { Component } from "react";
import style from "./Filter.module.css";
import InputText from "./InputText";
import Icon from "@material-ui/core/Icon";
import NewDropDown from "./NewDropDown";
import Button from "../Button/Button"
import _ from "lodash";
import filterLogic from './filterLogic';

class Filter extends Component {
  state = {
    filterVal: [{ inputVal: "promod", dropDown1: "", dropDown2: "" }],
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
    filterLogic(this.state.filterVal)
  }
  setStatus = () => {
    var { filterVal } = this.state;
    filterVal.push({ inputVal: "", dropDown1: "", dropDown2: "" });
    this.setState({filterVal})
};

  render() {
    const options = ["contains", "is equal to", "not equal to"];
    const { more, counter, filterVal } = this.state;
    //console.table(filterVal)
    //filterLogic("Promod")
    return (
      <div className={style.main_container}>
      { filterVal.map((data, index) =>  
      <div className={style.container}>
        <NewDropDown
        options={[
          {value: "name",label: "name" },
          { value: "phone", label: "phone" },
          { value: "service", label: "service" },
          { value: "booking_date", label: "booking_datedate" },
          { value: "amount", label: "amount" },
          { value: "status", label: "status" }
        ]} 
         onChange={(val)=>this.handleDropdown(val,index,"d1")}/>
        <NewDropDown
        options={[
          { value: "c",label: "contains" },
          { value: "dc", label: "doesn't_contain" },
          { value: "s", label: "starts with" },
          {value: "e", label: "ends with"}
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

