import React, { Component } from 'react'
import LanguageContext from './context/LanguageContext';
import ThemeContext from './context/ThemeContext';
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <LanguageContext.Consumer>
              {
                language => (
                  <header style={{background: theme.headerBg, color: theme.fontColor}}>
                    <div className="logo-container">
                      <img src={theme.logo} />
                    </div>
                    <div className="language-selector">
                      {language.langSelectLabel}
                      <select defaultValue="en" onChange={(event) => this.props.toggleLanguage(event.currentTarget.value)}>
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
      </ThemeContext.Consumer>
    )
  }
}
