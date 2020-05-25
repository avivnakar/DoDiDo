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
    removeMember = (userId) =>{
        const { cardMembers,updateBoard,board } = this.props;
        var idx = cardMembers.findIndex(member => member._id = userId)
        cardMembers.splice(idx,1)
        updateBoard(board)
    }
    addMember = (userId) =>{
        const { cardMembers,boardUsers,updateBoard,board } = this.props;
        var user = boardUsers.find(user => user._id === userId)
        cardMembers.push(user)
        updateBoard(board)
    }

    render() {
        return (
            <div>
                <span>Task To:</span>
                    {this.props.cardMembers && <MiniUser users={this.props.cardMembers} isOpen={true} command={this.removeMember}/>}
                <span>Other Board Members:</span>
                    <MiniUser users={this.getUnPickedUsers()} command={this.addMember} isOpen={true}/>
            </div>
        )
    }
}
