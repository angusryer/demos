import React from "react";
import "./Form.scss";

function Form(props) {
  return (
    <section className="form">
      <form
        className="form__area"
        onSubmit={(e) => {
          e.preventDefault();
          props.showComment(e.target);
        }}
      >
        <div className="form__area-group">
          <label htmlFor="nameInput" className="form__area-label">
            Name:{" "}
          </label>
          <input
            placeholder="Enter your name"
            name="nameInput"
            value={props.name}
            onChange={(e) => props.updateInput("name", e.target.value)}
          />
        </div>
        <div className="form__area-group">
          <label htmlFor="commentInput" className="form__area-label">
            Wutchusay?{" "}
          </label>
          <input
            placeholder="Enter a comment"
            name="commentInput"
            value={props.comment}
            onChange={(e) => {
              props.updateInput("comment", e.target.value);
            }}
          />
        </div>
        <button>Show your Stuff</button>
      </form>
    </section>
  );
}

export default Form;
