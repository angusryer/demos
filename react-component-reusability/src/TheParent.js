import React from "react";
import CommentItem from "./CommentItem";
import DeletedItems from "./DeletedItems";

class TheParent extends React.Component {
  state = {
    contentList: [
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
    ],
    deletedComments: [],
  };

  deleteComment = (id) => {
    const newArray = this.state.contentList.filter((item) => item.id !== id);
    const newDeleted = this.state.contentList.filter((item) => item.id === id);
    this.setState({
      contentList: newArray,
      deletedComments: [...this.state.deletedComments, newDeleted],
    });
  };

  render() {
    return (
      <>
        <h1>Hi.</h1>
        <section>
          {this.state.contentList.map((contentItem) => (
            <CommentItem
              key={contentItem.id}
              deleteItem={() => this.deleteComment(contentItem.id)}
              itemName={contentItem.name}
              itemComment={contentItem.comment}
            />
          ))}
        </section>
        <section>
          <DeletedItems deletedItems={this.state.deletedComments} />
        </section>
      </>
    );
  }
}

export default TheParent;
