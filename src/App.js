import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Result from './Containers/Result';
import './App.css';

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return {
        houses,
        selectedHouse: houses[action.indexSelected]
      }
    default:
      return {
        houses,
        selectedHouse: houses[Math.floor(Math.random() * 4)]
      }
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Result />
      </Provider>
    );
  }
}

export default App;
