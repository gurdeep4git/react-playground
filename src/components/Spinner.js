import React, { Component } from 'react'
import spinner from '../assets/ajax-loader.gif'

export default class Spinner extends Component {
    spinnerStyles = {
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '25px'

    }
    render() {
        return (
            <div style={this.spinnerStyles}>
                <img src={spinner} alt={spinner} />
            </div>
        )
    }
}
