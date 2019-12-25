import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class DateSelect extends Component {
  state = {
    selectedDate: moment(),
  };

  handleChange = selectedDate => {
    if (selectedDate !== null) {
      if (this.props.passDefaultDate) {
        this.props.returnValue(selectedDate);
      } else {
        this.setState(
          () => ({ selectedDate }),
          () => this.props.returnValue(this.state.selectedDate),
        );
      }
    }
  };

  render() {
    const minDate = this.props.minDate ? this.props.minDate : null;
    let incomingDefaultDate;
    if (typeof this.props.selectedDate === "string") {
      incomingDefaultDate = moment(this.props.selectedDate);
    } else {
      incomingDefaultDate = this.props.selectedDate;
    }
    if (this.props.passDefaultDate) {
      return (
        <DatePicker
          className="revv-inp"
          selected={incomingDefaultDate}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          placeholderText={this.props.placeholder}
          minDate={minDate}
        />
      );
    }
    return (
      <DatePicker
        className="form-control"
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        placeholderText={this.props.placeholder}
        minDate={minDate}
      />
    );
  }
}

export default DateSelect;
