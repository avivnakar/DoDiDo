import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";

export class AddCard extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            if (!e.target.value) this.setState({ isEdit: false })
            else {
                const { updateBoard, board, list } = this.props
                this.setState({ isEdit: false })
                var newCard = {
                    id: this.makeId(),
                    title: e.target.value,
                    labels: [],
                    createdBy: {},
                    cardMembers: [],
                    desc: null,
                    dueDate: null,
                    cheklists: [],
                    attachments: []
                }
                const idx = board.cardLists.findIndex(currList=> currList.id === list.id)
                const newBoard = {...board}
                newBoard.cardLists[idx].cards.push(newCard)
                updateBoard(newBoard)
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
    getAddCard() {
        if (!this.state.isEdit) {
            return (
                <div className="add-card-container" onClick={() => this.onEdit()}>
                    <a className="add-card-btn"><span><FaPlus /></span>Add Card</a>
                </div>
            )
        } else {
            return (
                <div className="add-card-container">
                    <textarea placeholder="enter title for this card" onKeyDown={(e) => { this.handleKeyDown(e) }}></textarea>
                    <button>X</button>
                    <button>save</button>
                </div>
            )
        }
    }
    render() {
        return (
            this.getAddCard()
        )
    }
}