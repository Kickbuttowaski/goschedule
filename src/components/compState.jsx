import React, { Component } from "react";
import PropTypes from "prop-types";

class TestSample extends Component {
  state = { sample: this.props.text};

handleChange=()=>{
    
}

  render() {
    console.log(this.state.sample);
    return <div>{this.state.sample && <h1>Promod</h1>}</div>;
  }
}

export default TestSample;

TestSample.defaultProps = {
  text: true
};

TestSample.propTypes = {
  sample: PropTypes.bool
};
