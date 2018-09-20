import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import Partielosange from './component/partielosange';
import Picture from './component/picture';
import Login from './component/login';
import Social from './component/social';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello, I love the world !!!</p>
        <Header />
        <Main />
        <Partielosange />
        <Picture />
        <Login />
        <Social />
      </div>
    );
  }
}