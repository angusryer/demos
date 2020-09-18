import React from "react";

// No state, so keeping this functional.
// Did NOT destructure props here for demonstration.
function Button(props) {
  return <button onClick={props.deleteComment}>DELETE</button>;
}

/* Assigning the deleteComment function, finally, to the onClick event
of the button element. This function retains the 'id' argument we passed
in from <Parent /> originally.

When it is clicked, it will run the function in <Parent />, and pass in the
'id' that is maintained a reference to. Because the function is located in
<Parent />, the function will have access to state. When state changes,
React will automatically re-render all the affected components and their
new prop values */

export default Button;
