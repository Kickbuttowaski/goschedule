import React, { Component } from "react";
import style from "./Tables.module.css";
import _ from "lodash";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import Badge from "./../Badge/Badge";

class Table extends Component {
  state = {
    dbData: [],
    sortOrder: { path: "title", order: "asc" },
    theadShadow: true,
    selectVal: "",
    addValue: {},
    openModel: false
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
    let { tableData } = this.props;
    return tableData.map(({ Header, accessor, width }) => (
      <th
        align="left"
        key={accessor}
        style={{ width: width }}
        onClick={() => this.handleSort(accessor)}
      >
        {Header}
      </th>
    ));
  };
  handleData = data => {
    this.setState({ selectVal: "filter " + data, droplist: data });
  };
  generateBody = dbData => {
    let { tableData } = this.props;
    return dbData.map(data => (
      <tr>
        {tableData.map(({ accessor, badge, width }) =>
          badge === undefined && badge !== true ? (
            <td style={{ width: width }}>{data[accessor]}</td>
          ) : (
            <td style={{ width: width }}>
              <Badge text={data[accessor]} color="#C0F7F1" />
            </td>
          )
        )}
      </tr>
    ));
  };
  handleSelect = (e, selectVal, flag = true) => {
    var addValue = { ...this.state.addValue };
    if (flag) {
      this.setState({ [selectVal]: e.currentTarget.value });
    } else {
      addValue[selectVal] = e.currentTarget.value;
      this.setState({ addValue });
    }
  };
  openModel = () => {
    this.setState({ openModel: !this.state.openModel, addValue: {} });
  };
  populateInput = () => {
    let { tableData } = this.props;
    let { addValue } = this.state;
    return tableData.map(({ Header, accessor }) => (
      <InputText
        placeHolder={Header}
        value={addValue[accessor]}
        onChange={e => this.handleSelect(e, accessor, false)}
      />
    ));
  };
  appendData = () => {
    var dbData = [...this.state.dbData];
    dbData.push(this.state.addValue);
    this.setState({ dbData, openModel: false });
  };
  render() {
    const { dbData, sortOrder, theadShadow, selectVal, openModel } = this.state;
    var tableData = "";
    if (selectVal != "" || undefined) {
      tableData = dbData.filter(m =>
        m.name.toLowerCase().startsWith(selectVal.toLowerCase())
      );
    } else {
      tableData = dbData;
    }
    tableData = _.orderBy(tableData, sortOrder.path, sortOrder.order);
    //const tableData = _.difference(dbData,filtered)

    return (
      <React.Fragment>
        <div className={style.filterVal}>
          <InputText
            icon="search"
            placeHolder="filter name"
            value={selectVal}
            onChange={e => this.handleSelect(e, "selectVal")}
          />
          <Button size="medium" text="Add" onClick={this.openModel} />
        </div>
        {openModel && (
          <div className={style.modal}>
            {this.populateInput()}
            <div className={style.modal_button}>
              <Button text="Add" onClick={this.appendData} />
              <Button text="Close" onClick={this.openModel} />
            </div>
          </div>
        )}
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
