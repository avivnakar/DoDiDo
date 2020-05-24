import React, { Component } from 'react'

export class LabelPreiview extends Component {
    render() {
        const {label} = this.props
        console.log(label);
        
        var styleLab ={
            backgroundColor: label.color,
            width: 40,
            height: 30,
            borderRadius: 6
        }
        return (
            <div style={styleLab}>   
                <span>{label.title}</span>
            </div>
        )
    }
}
