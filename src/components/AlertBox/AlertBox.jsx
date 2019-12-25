import React, { Component } from "react";
import style from "./AlertBox.module.css";
import checked from ".././icons/checked.svg";
import delete_sign from ".././icons/delete_sign.svg"

class AlertBox extends Component {
  constructor(props) {
    super(props);
    this.state = { frameStatus: `${style["frame"]}` };
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert(flag) {
    const { show } = this.props;

    return show === true
      ? `${style["frame"]} ${style["show"]}`
      : `${style["frame"]}`;
  }
  render() {
    let frameStatus = this.toggleAlert();
    return (
      <div className={frameStatus}>
        <img
          className={style.statusicon}
          src={checked}
          alt="success_status"
        ></img>
        <p className={style.main_info}>New customer added</p>
        <img className={style.closeicon} src={delete_sign} alt="close"></img>
        <p className={style.sub_info}>user was added</p>
      </div>
    );
  }
}

export default AlertBox;
