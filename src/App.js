import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RepeatComponet from './RepeatComponet';

class App extends Component {
  constructor() {
    super();
    this.state = {name: 'julia'};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RepeatComponet count="5"><p>{this.state.name}</p></RepeatComponet>
      </div>
    );
  }
}

export default App;
