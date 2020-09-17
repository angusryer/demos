import React, { Component } from 'react';

class Card extends Component {

    render() {
        let {content, title, clickHandler} = this.props;

        return (
            <div className="card" onClick={(event) => clickHandler(event, title)}>
                <div className="card__content">
                    {content}
                </div>
                <h4 className="card__title">
                    {title}
                </h4>
            </div>
        );
    }
}

export default Card;