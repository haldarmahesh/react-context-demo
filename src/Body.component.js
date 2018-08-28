import React, { Component } from 'react'
import LanguageContext from './context/LanguageContext';
import ThemeContext from './context/ThemeContext';
export default class Body extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <LanguageContext.Consumer>
              {
                language => (
                  <div className="body" style={{color: theme.config.fontColor, background: theme.config.bodybg}}>
                    <div>{language.labels.body}</div>
                  </div>
                )
              }
            </LanguageContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
