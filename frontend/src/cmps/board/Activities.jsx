import React, { Component } from 'react'

export class Activities extends Component {
    render() {
        const { activity } = this.props
        const date = new Date(activity.donetAte)
        const TIME = date.toTimeString()
        return (
            <div className="activities">
                <div className="activities-txt">{activity.text}</div>
                <div className="activities-time">>{TIME}</div>
            </div>
        )
    }
}
