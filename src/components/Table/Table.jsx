import React, { Component } from "react";
import style from "./Tables.module.css";
import _ from "lodash";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import Badge from "./../Badge/Badge";
import Filter from './../Filter/Filter';
import PropTypes from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbData: [],
      filterData:[],
      sortOrder: { path: "title", order: "asc" },
      theadShadow: true,
      selectVal: "",
      addValue: {},
      openModel: false,
      openFilter:false
    };
    this.getKeyValue = this.getKeyValue.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.generateHeader = this.generateHeader.bind(this);
    this.handleData = this.handleData.bind(this);
    this.generateBody = this.generateBody.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.openModel = this.openModel.bind(this);
  this.openFilter = this.openFilter.bind(this);
  this.populateInput = this.populateInput.bind(this);
  this.handlefilter = this.handlefilter.bind(this);
  this.appendData = this.appendData.bind(this)

  }
  
  componentDidMount() {
    this.setState({ dbData: this.props.dbData });
  }
  getKeyValue () {
    const { dbData } = this.state;
    let keyValue = Object.keys({ ...dbData[0] });
    return keyValue;
  };
  handleSort(path) {
    const sortOrder = { ...this.state.sortOrder };
    sortOrder["path"] = path;
    sortOrder["order"] = sortOrder["order"] === "asc" ? "desc" : "asc";
    this.setState({ sortOrder });
  };
  handleScroll (e)  {
    var theadShadow;
    theadShadow = e.currentTarget.scrollTop === 0 ? true : false;
    this.setState({ theadShadow });
  };
  generateHeader () {
    let { tableData } = this.props;
    return tableData.map(({ label, value, width }) => (
      <th
        align="left"
        key={value}
        style={{ width: width }}
        onClick={() => this.handleSort(value)}
      >
        {label}
      </th>
    ));
  };
  handleData (data) {
    this.setState({ selectVal: "filter " + data, droplist: data });
  };
  generateBody (dbData) {
    let { tableData } = this.props;
    return dbData.map(data => (
      <tr>
        {tableData.map(({ value, badge, width }) =>
          badge === undefined && badge !== true ? (
            <td style={{ width: width }}>{data[value]}</td>
          ) : (
            <td style={{ width: width }}>
              <Badge text={data[value]} color="#C0F7F1" />
            </td>
          )
        )}
      </tr>
    ));
  };
  handleSelect  (e, selectVal, flag = true)  {
    var addValue = { ...this.state.addValue };
    if (flag) {
      this.setState({ [selectVal]: e.currentTarget.value });
    } else {
      addValue[selectVal] = e.currentTarget.value;
      this.setState({ addValue });
    }
  };
  
  openModel ()  {
    this.setState({ openModel: !this.state.openModel, addValue: {} });
  };
  openFilter (){
    this.setState({openFilter:!this.state.openFilter})
  }
  populateInput  ()  {
    let { tableData } = this.props;
    let { addValue } = this.state;
    return tableData.map(({ label, value }) => (
      <InputText
        placeHolder={label}
        value={addValue[value]}
        onChange={e => this.handleSelect(e, value, false)}
      />
    ));
  };
 
  handlefilter (filterResult){
    this.setState({filterData:filterResult})
  }
  appendData ()  {
    var dbData = [...this.state.dbData];
    dbData.push(this.state.addValue);
    this.setState({ dbData, openModel: false });
  };
  render() {
    const { dbData, sortOrder, theadShadow, selectVal, openModel, openFilter,filterData } = this.state;
    var tableData = "";
    
    if(filterData.length > 0)
      {
        tableData = filterData
      }
    if (selectVal != "" || undefined) {
      tableData = dbData.filter(m =>
        m.name.toLowerCase().startsWith(selectVal.toLowerCase())
      );
    } else if(filterData.length <= 0){
      tableData = dbData;
    }
    tableData = _.orderBy(tableData, sortOrder.path, sortOrder.order);
    return (
      <React.Fragment>
        <div className={style['table_option']}>
          <InputText
            icon="search"
            icon_position="right"
            placeHolder="filter name"
            value={selectVal}
            onChange={e => this.handleSelect(e, "selectVal")}
          />
          <Button size="medium" text="Add" onClick={this.openModel.bind(this)} />
          <Button size="medium" text="Filter" onClick={this.openFilter.bind(this)} />
        </div>
        {openModel && (
          <div className={style['option__add-modal']}>
            {this.populateInput()}
            <div className={style['option__add-modalbutton']}>
              <Button text="Add" onClick={this.appendData.bind(this)} />
              <Button text="Close" onClick={this.openModel.bind(this)} />
            </div>
          </div>
        )}
         {openFilter && <Filter visibility={false} options={this.props.tableData} dbData={this.state.dbData} onFilter={this.handlefilter}/>}
         
        <div className={style.wrapper}>
          <table>
            <thead className={theadShadow === true ? "" : style.active}>
              <tr>{this.generateHeader()}</tr>
            </thead>

            <tbody onScroll={e => this.handleScroll(e)}>
              {this.generateBody(tableData)}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
