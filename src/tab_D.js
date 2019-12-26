import React, { Component } from "react";
import style from "./Tables.module.css";
import _ from "lodash";
import InputText from "../InputText/InputText";

class Table extends Component {
  state = {
    dbData: [],
    sortOrder: { path: "title", order: "asc" },
    theadShadow: true,
    selectVal: ""
  };
  componentDidMount() {
    this.setState({ dbData: this.props.dbData });
  }
  getKeyValue = () => {
    const { dbData } = this.state;
    let keyValue = Object.keys({ ...dbData[0] });
    return keyValue;
  };
  handleSort = path => {
    const sortOrder = { ...this.state.sortOrder };
    sortOrder["path"] = path;
    sortOrder["order"] = sortOrder["order"] === "asc" ? "desc" : "asc";
    this.setState({ sortOrder });
  };
  handleScroll = e => {
    var theadShadow;
    theadShadow = e.currentTarget.scrollTop === 0 ? true : false;
    this.setState({ theadShadow });
  };
  generateHeader = () => {
    const { dbData } = this.state;
    const colWidth=["30px","70px","30px","30px","30px"]
    let keyValue = this.getKeyValue();
    return keyValue.map((header, index) => (
      <th  align="left" key={header} onClick={() => this.handleSort(header)}>
        {this.props.label[index]}
      </th>
    ));
  };
  handleData = data => {
    this.setState({ selectVal: "filter " + data, droplist: data });
  };
  generateBody = dbData => {
    let keyValue = Object.keys({ ...dbData[0] });
    const colWidth=["30px","70px","30px","30px","30px"]
    return dbData.map(data => (
      <tr>
        {keyValue.map((keyy,index) => (
          <td align="left">{data[keyy]}</td>
        ))}
      </tr>
    ));
  };
  handleSelect = e => {
    this.setState({ selectVal: e.currentTarget.value });
  };
  render() {
    const {
      dbData,
      keyValue,
      sortOrder,
      theadShadow,
      selectVal,
      droplist
    } = this.state;

    if (selectVal != "" || undefined) {
      var filtered = dbData.filter(m =>
        m.title.toLowerCase().startsWith(selectVal.toLowerCase())
      );
    } else {
      filtered = dbData;
    }
    const tableData = _.orderBy(filtered, sortOrder.path, sortOrder.order);

    return (
      <React.Fragment>
        <div className={style.filterVal}>
          <InputText
            icon="search"
            placeholder="filter"
            value={selectVal}
            onChange={e => this.handleSelect(e)}
          />
        
        </div>
        <div className={style["wrapper"]}>
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
