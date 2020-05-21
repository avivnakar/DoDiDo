import React, { Component } from 'react'

export class CardTitle extends Component {
    render() {
        return (
            <h3>
                {this.props.title}
            </h3>
        )
    }
}
