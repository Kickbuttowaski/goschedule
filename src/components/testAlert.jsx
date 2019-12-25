import React, { Component } from "react";
import Button from "./Button/Button";
import AlertBox from "./AlertBox/AlertBox";
import { display } from "@material-ui/system";

class TestAlert extends Component {
  state = { alertStatus: false };
  handleClick = () => {
    this.setState({ alertStatus: !this.state.alertStatus });
  };
  render() {
    return (
      <React.Fragment>
        <Button size="medium" label="Click" onClick={this.handleClick}></Button>
        <AlertBox show={this.state.alertStatus} />
        
      </React.Fragment>
    );
  }
}

export default TestAlert;
