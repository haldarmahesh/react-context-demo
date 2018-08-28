import React, { Component } from 'react'
import LanguageContext from './context/LanguageContext';
export default class Body extends Component {
    render() {
        return (
            <LanguageContext.Consumer>
            {
                value => (
                    <div className="body">
                    {console.log('val', value)}
                    <div>{value.body}</div>
                </div>
                )
            }
            </LanguageContext.Consumer>
        )
    }
}
