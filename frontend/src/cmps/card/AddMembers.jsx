import React, { Component } from 'react'
import { MiniUser } from '../MiniUser.jsx';

export class AddMembers extends Component {
    matchUser(userId) {
        const { cardMembers } = this.props;
        return cardMembers.find(user => user._id === userId)
    }
    getUnPickedUsers() {
        const { boardUsers } = this.props;
        var unPickedUsers = [];
        boardUsers.forEach((user) => {
            if (!this.matchUser(user._id)) unPickedUsers.push(user)
        });
        return unPickedUsers;
    }

    render() {
        return (
            <div>
                <span>Task To:</span>
                    <MiniUser users={this.props.cardMembers} />
                <span>Other Board Members:</span>
                    <MiniUser users={this.getUnPickedUsers()} />
            </div>
        )
    }
}
