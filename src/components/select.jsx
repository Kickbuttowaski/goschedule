


export default sample;

import React, { useState } from "react";
import "../css/select.css";

const Select = () => {
  const contents = ["Option1", "Option2", "Option3", "Option4"];
  const [drop, setDrop] = useState(false);
  const [header, setHeader] = useState("Select any option");
  const setHead = content => {
    setHeader(content);
    exposemenu();
  };
  const exposemenu = () => {
    setDrop(!drop);
  };
  return (
    <div className="dropdown">
      <div onClick={exposemenu} className={drop ? "dropbtn-active" : "dropbtn"}>
        {header}
      </div>
      <div className={drop ? "dropdown-content" : "dropdown-content-hide"}>
        {contents.map(content => (
          <p onClick={() => setHead(content)}>{content}</p>
        ))}
      </div>
      
    </div>
  );
};

export default Select;
