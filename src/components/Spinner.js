import React, { Component } from 'react'
import spinner from '../assets/ajax-loader.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={spinner} alt={spinner} />
            </div>
        )
    }
}
