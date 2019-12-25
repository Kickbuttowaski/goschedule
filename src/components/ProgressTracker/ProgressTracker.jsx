import React, { Component } from "react";
import style from "./ProgressTracker.module.css";
import { PropTypes } from "prop-types";

const ProgressTracker = ({ data, status: counter }) => {
  return (
    <div className={style.container}>
      <div>
        <ul id="progress-bar" className={style.progressbar}>
          {data.map((data, index) =>
            index <= counter ? (
              <li className={style.active}>{data}</li>
            ) : (
              <li>{data}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

ProgressTracker.defaultProps = {
  status: -1,
  data: ["A", "B", "C", "D"],
  onClick: function(data) {
    console.log(data.value);
  }
};
ProgressTracker.propTypes = {
  status: PropTypes.number,
  date: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};
export default ProgressTracker;
