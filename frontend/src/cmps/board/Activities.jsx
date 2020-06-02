import React, { Component } from 'react'

export class Activities extends Component {
    render() {
        const {activity} = this.props
        const date = new Date(activity.donetAte)
        const TIME = date.toTimeString()
        return (
            <div>
                <div>{activity.text}</div>
                <div>{TIME}</div>
            </div>
        )
    }
}
