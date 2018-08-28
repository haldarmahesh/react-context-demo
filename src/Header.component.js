import React, { Component } from 'react'
import logo from './assets/medium_dark.png';
import LanguageContext from './context/LanguageContext';
export default class Header extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {
          language => (
            <header>
              <div className="logo-container">
                <img src={logo} />
              </div>
              <div className="language-selector">
                {language.langSelectLabel}
                <select defaultValue="en">
                  <option value="en">English</option>
                  <option value="gr">Germnan</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="theme-selector">
                {language.themeSelectLabel}
                <select defaultValue="en">
                  <option value="en">Light</option>
                  <option value="gr">Dark</option>
                </select>
              </div>
            </header>
          )
        }
      </LanguageContext.Consumer>
    )
  }
}
