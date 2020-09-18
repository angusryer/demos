import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import Comment from "./Comment/Comment";
import "./App.scss";

class App extends React.Component {
  state = {
    name: "",
    comment: "",
    commentList: [],
  };

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  showComment = (formGroup) => {
    const commentObject = {
      id: Math.random(),
      name: formGroup.nameInput.value,
      comment: formGroup.commentInput.value,
      img: "https://picsum.photos/50",
    };
    this.setState({
      commentList: [...this.state.commentList, commentObject],
    });
  };

  render() {
    return (
      <>
        <Nav />
        <Form
          name={this.state.name}
          comment={this.state.comment}
          updateInput={this.updateInput}
          showComment={this.showComment}
        />
        <section className="comments">
          {this.state.commentList.map((singleComment) => (
            <Comment key={singleComment.id} commentData={singleComment} />
          ))}
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
