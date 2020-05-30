import React, { Component } from 'react'

export class LabelPreiview extends Component {

    render() {
        const { label } = this.props
        var styleLab = {
            backgroundColor: label.color,
            width: 35,
            height: 8
        }
        return (
            <div className="card-label" style={styleLab}  onClick={() => this.props.command(label.id)}>
            </div>
        )
    }
}
