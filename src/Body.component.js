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
                value => (
                  <div className="body" style={{color: theme.fontColor, background: theme.bodybg}}>
                    <div>{value.body}</div>
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
