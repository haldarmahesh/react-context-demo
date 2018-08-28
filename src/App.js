import React, { Component } from 'react';
import './App.css';
import Header from './Header.component';
import Body from './Body.component';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';
import {labels} from './context/LanguageContext';
class App extends Component {
  constructor() {
    super();
    this.state = {
      language: 'fr'
    }
  }
  render() {
    return (
      <ThemeContext.Provider value="light">
        <LanguageContext.Provider value={labels[this.state.language]}>
          <div>
            <Header />
            <Body />
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
