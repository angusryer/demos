import React, { Component } from 'react';
import '../styles/style.css';
import Header from './Header';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div>
        <Header logo="BrainStation"/>
        <CardList/>
      </div>
    );
  }
}

export default App;
