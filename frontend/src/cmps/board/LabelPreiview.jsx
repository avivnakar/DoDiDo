import React, { Component } from 'react'

export class LabelPreiview extends Component {

    render() {
        const { label } = this.props
        var styleLab = {
            backgroundColor: label.color,
            width: 25,
            height: 7,
            borderRadius: 6,
            marginLeft: 3
        }
        return (
            <div style={styleLab}  onClick={() => this.props.command(label.id)}>
            </div>
        )
    }
}
