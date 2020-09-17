import React from "react";

const DeletedItems = (props) => {
  return (
    <div>
      {props.deletedItems.map((item) => {
        return (
          <pre key={item.id}>
            {item.id}: {item.name} said {item.comment}
          </pre>
        );
      })}
    </div>
  );
};

export default DeletedItems;
