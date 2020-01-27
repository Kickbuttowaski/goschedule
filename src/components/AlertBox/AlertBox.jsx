import React, { Component } from "react";
import style from "./AlertBox.module.css";
import checked from "../icons/checked.svg";
import delete_sign from "../icons/delete_sign.svg"
import { PropTypes } from 'prop-types';

class AlertBox extends Component {
  state = { flag: true };

  static getDerivedStateFromProps(props, current_state) {
    return { flag: !current_state.flag }
  }
  toggleAlert = () => {
    this.setState({ flag: true })
  }
  render() {
    var { mainText, subText } = this.props
    var { flag } = this.state
    return (
      <div className={flag === true ? `${style['alert-box']} ${style["alert-box--show"]}` : style['alert-box']}>
        <img
          className={style['alert-box__status-icon']}
          src={checked}
          alt="success_status"
        ></img>
        <p className={style['alert-box__main-info']}>{mainText}</p>
        <img className={style['alert-box__close-icon']} src={delete_sign} alt="close" onClick={this.toggleAlert}></img>
        <p className={style['alert-box__sub-info']} >{subText}</p>
      </div>
    );
  }
}

export default AlertBox;

AlertBox.defaultProps = {
  mainText: "Sample main_text",
  subText: "Sample sub_text",
  flag:true
};
AlertBox.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  show: PropTypes.bool
};


