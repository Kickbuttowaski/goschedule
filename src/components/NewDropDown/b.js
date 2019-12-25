import React, { Component} from "react";
import style from "./AlertBox.module.css";
import checked from "./checked.svg";
import delete_sign from "./delete_sign.svg";

class AlertBox extends Component {
  state = { frameStatus:  };
  handleClick = () => {
    //this.setState({ frameStatus: "close" });
  };
  toggleAlert = flag => {
    const { show } = this.props;
    if (flag) {
      return `${style["frame"]}`;
    } else {
      return show === true
        ? `${style["frame"]} ${style["show"]}`
        : `${style["frame"]}`;
    }
  };
  render() {
    let frameStatus = this.toggleAlert(0);
    return (
      <div className={frameStatus}>
        <img
          className={style.statusicon}
          src={checked}
          alt="success_status"
        ></img>

        <span className={style.main_info}>New customer added</span>
        <img
          className={style.closeicon}
          src={delete_sign}
          alt="close"
          onClick={this.handleClick}
        ></img>
        <p className={style.sub_info}>user was added</p>
      </div>
    );
  }
}

export default AlertBox;
