import React, { Component } from 'react';
import './App.css';
import Header from './Header.component';
import Body from './Body.component';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
