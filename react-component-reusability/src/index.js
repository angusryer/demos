import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";

// Import the main component (<App /> in most cases, but in this case I just called it <Parent />)

ReactDOM.render(<Parent />, document.getElementById("root"));

// index.js is, by convention, used as the de-facto entry point for MOST systems, such as React.