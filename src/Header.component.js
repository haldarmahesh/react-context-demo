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
                  <header style={{ background: theme.config.headerBg, color: theme.config.fontColor }}>
                    <div className="logo-container">
                      <img src={theme.config.logo} />
                    </div>
                    <div className="language-selector">
                      {language.labels.langSelectLabel}
                      <select value={language.name} onChange={(event) => this.props.toggleLanguage(event.currentTarget.value)}>
                        <option value="en">English</option>
                        <option value="gr">Germnan</option>
                        <option value="fr">French</option>
                        <option value="sp">Spanish</option>
                        <option value="hn">Hindi</option>
                      </select>
                    </div>
                    <div className="theme-selector">
                      <span className="label">{language.labels.themeSelectLabel}({theme.type})</span>
                      <label className="switch">
                        <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => this.props.toggleTheme(event.currentTarget.value)} />
                        <span className="slider round"></span>
                        
                      </label>
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
