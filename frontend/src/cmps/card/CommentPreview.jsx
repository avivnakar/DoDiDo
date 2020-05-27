import React, { Component } from 'react'
import { MiniUser } from '../MiniUser';

export class CommentPreview extends Component {
    getTime() {
        const date = new Date(this.props.comment.createdAt)
        var H = date.getHours()
        var Min = date.getMinutes()
        var day = date.getDay()
        var Mo = date.getMonth()
        if (Min < 10) Min = '0' + Min
        if (H < 10) H = '0' + H
        if (day < 10) day = '0' + day
        if (Mo < 10) Mo = '0' + Mo
        const textDate = H + ':' + Min + '  ' + day + '/' + Mo
        return textDate
    }
    render() {
        const { comment } = this.props
        const users = []
        users.push(comment.createdBy)
        return (
            <div className="comments-container">
                <div className="com-head flex  align-center">
                    <MiniUser users={users} command={console.log()} isOpen={true} />
                    <span className="com-time">{this.getTime()}</span>
                </div>
                <div className="comment">{comment.text}</div>
            </div>
        )
    }
}
