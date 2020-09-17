import React from "react";
import Button from "./Button";

function CommentItem({ deleteItem, itemName, itemComment }) {
  return (
    <div>
      <h3>{itemName}</h3>
      <p>{itemComment}</p>
      <Button delete={deleteItem} />
    </div>
  );
}

export default CommentItem;
