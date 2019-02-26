import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       HEllo
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(

        document.getElementById('app')
    )
});

export default App;
