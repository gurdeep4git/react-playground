import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.errorInfo) {
            // You can render any custom fallback UI
            return (
                <>
                    <h3>Something went wrong</h3>
                    <p>{this.state.errorInfo.componentStack}</p>
                </>
            )
        }

        return this.props.children;
    }
}
