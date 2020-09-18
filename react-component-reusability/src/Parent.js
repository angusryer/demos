import React from "react";
import Comment from "./Comment";


// We're using a class-based component here because we've decided to keep out state here.
// It's not required to do that, but it does keep everything in one place.

class Parent extends React.Component {
  // Set up our initial state object with a bunch of default comments
  state = { // State is an OBJECT, so it follows standard object syntax
    commentList: [ // We have a key called 'commentList' whose value is an array. Inside the array are 5 objects.
      {
        id: 0,
        name: "Eric",
        comment: "Aah",
      },
      {
        id: 1,
        name: "Angus",
        comment: "Yay!",
      },
      {
        id: 2,
        name: "Danielle",
        comment: "Yahoo!",
      },
      {
        id: 3,
        name: "Kaleb",
        comment: "Oh.",
      },
      {
        id: 4,
        name: "Jaycee",
        comment: "Ack!",
      },
    ]
  };

  // Here is a method we are declaring and defining within this class.
  // It takes the 'id' value of a given comment, filters it out of the
  // commentList array that resides in our state object, and then sets
  // the commentList array to the new, filtered array.
  deleteComment = (id) => {
    const newArray = this.state.commentList.filter((comment) => comment.id !== id);
    this.setState({
      commentList: newArray
    });
  };

  // declare a render method in this class, because React runs the method
  // it finds to be named 'render' by default. It is reequired to have a
  // render() function when using classes in React. Function and method mean
  // the same thing.
  render() {
    return (
      <>
        <h1>Hi.</h1>
        <p>Just reload the pagee to bring these comments back!</p>
        <section>
          {/* Notice this fancy comment syntax. We need the curly braces
          to indicate that we are writing a pure javascript expression, then 
          use the block comment symbols. We can also use // for single line comments.
          
          Below, we access the commentList array from within this component's state,
          and map directly over it. Each 'comment' is one of the comment objects in
          the array, so we then create a <Comment /> component for each comment object,
          passing in the values from that comment.
          
          We also pass in a 'deleteFunction' prop, and provide it a value equal to
          the 'deleteComment' function we defined above. We also want to pass in as
          an argument the comment id we want to associate with our delete function.
          Because we have to provide an argument in parentheses, we then have to avoid
          invoking the function by wrapping it in an arrow function. This will let the
          function and the argument pass into the child component intact. */}
          {this.state.commentList.map((comment) => (
            <Comment
              key={comment.id}
              deleteFunction={() => this.deleteComment(comment.id)}
              name={comment.name}
              comment={comment.comment}
            />
          ))}
        </section>
      </>
    );
  }
}

export default Parent;
