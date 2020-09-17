import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {

    render() {
        let logger = (event, message) => {
            console.log(message);
          };

        let cardContent = [
          {
            title: 'First Card',
            content: 'First card content'
          },
          {
            title: 'Second Card',
            content: 'Second card content'
          }
        ]

        return (
            <section className="card-list">
                {cardContent.map((content, index) => <Card key={index} title={content.title} content={content.content} clickHandler={logger}></Card>)}
            </section>
        );
    }
}

export default CardList;