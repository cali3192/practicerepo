import React from "react";

import Second from "./Second";

const buttonStyle = {
  margin: "10px",
  backgroundColor: "#ff9900"
};

const Test = () => {
  return (
    <>
      This is the test endpoint
      <button style={buttonStyle}>little button</button>
      <div>
        <Second />
      </div>
    </>
  );
};

export default Test;
