import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { establishments } from './fixtures';

class App extends Component {
  render() {
      return (
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to { this.props.title }</h2>
              </div>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </div>
      );
  }
}
  const listEstablishment = establishments.map( (establishment) => {
      return (
          <li
              key = { establishment.id }
              className = 'establishment'
          >
              <h3>{ establishment.name }</h3>
              { establishment.description }
          </li>
      )
  })
  return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to { this.props.title }</h2>
          </div>
          <div className="App-intro">
              { listEstablishment }
          </div>

      </div>
  );
export default App;
