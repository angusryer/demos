import React from 'react';
import Form from './Form';
import './App.css';

function App() {
  const printMessage = (message) => {
    console.log(message)
  }

  // Notice that each <Form> component receives the same function, BUT
  // each printMessage function will receive an event via the event handler
  // that refers to the specific form that is clicked.
  return (
    <div className="App">
      <Form printFunction={printMessage} />
      <Form printFunction={printMessage} />
      <Form printFunction={printMessage} />
      <Form printFunction={printMessage} />
    </div>
  );
}

export default App;
