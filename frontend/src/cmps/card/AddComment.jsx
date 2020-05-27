import React, { Component } from 'react'

export class AddComment extends Component {
    onBlur(e) {
        if (e.target.value) this.handleKeyDown(e, true)
    }
    handleKeyDown(e, blur = false) {
        if (e.key === 'Enter' || blur) {
            if (e.target.value) {
                var newComment = {
                    id: this.makeId(),
                    text: e.target.value,
                    createdAt: Date.now(),
                    createdBy: {
                        "_id": "u101",
                        "fullName": "Gal Rondel",
                        "imgUrl": "adf.png"
                    }
                }
                e.target.value = null
                this.props.card.comments.unshift(newComment)
                this.props.updateBoard(this.props.board)
            }
        }
    }
    makeId(length = 4) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    render() {
        return (
            <input placeholder="Enter new comment" onKeyDown={(e) => { this.handleKeyDown(e) }} onBlur={(e) => { this.onBlur(e) }} />
        )
    }
}
