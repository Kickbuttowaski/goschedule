import React, { Component } from "react";
import ProgressTracker from "./ProgressTracker/ProgressTracker";
import Button from './Button/Button';

class PTracker extends Component {
  state = {
    counter: ''
  };
  handleCounter = flag => {
    var counter = this.state.counter;
    if (flag === "N") {
      if (counter < 5) {
        counter++;
        this.setState({ counter });
      }
    } else if (flag === "P") {
      if (counter > 0) {
        counter--;
        this.setState({ counter });
      }
    } else {
      this.setState({ counter: -1 });
    }
  };
  render() {
      console.log(this.state.counter)
    return (
      <div>
        <ProgressTracker
          status={this.state.counter}
          data={["Start", "Under Process", "Yet to complete", "Completed"]}
        />
        <div >
          <Button text="Next" onClick={() => this.handleCounter("N")} />
          <Button text="Prev" onClick={() => this.handleCounter("P")} />
          <Button text="Undo" onClick={() => this.handleCounter("R")} />
        </div>
      </div>
    );
  }
}

export default PTracker;
