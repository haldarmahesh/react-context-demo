import React, { Component } from 'react'
import logo from './assets/medium_dark.png';

export default class Header extends Component {
  render() {
    return (
        <header>
        <div className="logo-container">
          <img src={logo} />
        </div>
        <div className="language-selector">
        Select language
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="gr">Germnan</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="theme-selector">
        Select mode
        <select defaultValue="en">
            <option value="en">Light</option>
            <option value="gr">Dark</option>
          </select>
        </div>
      </header>
    )
  }
}
