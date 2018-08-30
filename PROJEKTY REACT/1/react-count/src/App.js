import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
// import Imie from "./Imie";


class App extends Component {
  render() {
    // let cycek = {imie: 'Stefan', nazwisko: 'burczymucha', wiek: '31'};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Counter />
        {/* <Imie osoba={cycek}/> */}
      </div>
    );
  }
}

export default App;
