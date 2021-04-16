import React, { Component } from 'react';
import './errorBoundary.scss';

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    Oops, something went wrong... We are dooing our the best to fix the issue
                </h2>
            )
        } else {
            return this.props.children;
        }
    }
}