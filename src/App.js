import React, { Component } from 'react';
import  NavbarPage  from './Navbar';
import MainScreenComponent from './MainScreenComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarPage / >
      <MainScreenComponent />
      </div>
    );
  }
}

export default App;
