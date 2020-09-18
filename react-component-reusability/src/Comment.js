import React from "react";
import Button from "./Button";

// This is functional because we don't need to keep any state.
// We have { destructured } the props we passed in for clarity.
// Notice that props names are NOT the names of the VALUES we
// passed in from <Parent />, but the KEYS (left side of the = sign).
function Comment({ deleteFunction, name, comment }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{comment}</p>
      <Button deleteComment={deleteFunction} /> {/* Passing in the deleteFunction to <Button />
      and, just to demonstrate the connection between prop key names and prop values, have named
      the prop key passed into <Button /> 'deleteComment' */}
    </div>
  );
}

export default Comment;
