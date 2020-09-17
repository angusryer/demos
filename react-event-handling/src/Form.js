import React from "react";

function Form({ printFunction }) {
  const handleEvent = (event) => {
    event.preventDefault();
    printFunction(event.target[0].value); // target[0] gives us the first element in the form, which is the <input> element.
    event.target[0].value = "";
  };

  return (
    <form onSubmit={ event => handleEvent(event) }>
      <input type="text"></input>
      <button>Print a Message!</button>
    </form>
  );
}

export default Form;
