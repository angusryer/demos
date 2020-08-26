import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Types
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// Actions
const increaseCount = { type: INCREASE }
const decreaseCount = { type: DECREASE }

// Reducer 
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREASE:
            return  state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

// Store
const store = createStore(counterReducer);

// Components
const App = () => {
    return (
        <div className="counter-group">
            <div>{store.getState()}</div>
            <button onClick={() => store.dispatch(increaseCount)}>Increase</button>
            <button onClick={() => store.dispatch(decreaseCount)}>Decrease</button>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
