import React, { Component } from 'react';
import './App.css';
import Header from './Header.component';
import Body from './Body.component';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';
import {labels} from './context/LanguageContext';
import {themeConfig} from './context/ThemeContext';
class App extends Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
      theme: 'light'
    }
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleLanguage(newLang) {
    this.setState({
      language: newLang
    });
  }
  toggleTheme(newTheme) {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }
  render() {
    return (
      <ThemeContext.Provider value={{type: this.state.theme, config: themeConfig[this.state.theme]}}>
        <LanguageContext.Provider value={{name: this.state.language, labels: labels[this.state.language]}}>
            <Header toggleLanguage={this.toggleLanguage} toggleTheme={this.toggleTheme}/>
            <Body />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
