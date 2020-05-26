import React, { Component } from 'react'
import { CardCheckList } from './CardCheckList'

export class AddCheckList extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    onBlur(e) {
        this.handleKeyDown(e, true)
    }
    handleKeyDown = (e, blur = false) => {
        const { board, card } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                this.setState({
                    isEdit: false
                })
            }
            else {
                var newChxList = {
                    id: this.makeId(),
                    title: e.target.value,
                    todos: []
                }
                this.setState({
                    isEdit: false
                })
                card.checkLists.push(newChxList)
            }
            this.props.updateBoard(board)
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
            <input placeholder="CheckList Title" onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
        )
    }
}

