import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

export class AddCard extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    addCard = () =>{
        var e = {
            key: 'Enter',
            target: document.querySelector('.add-card-inp')
        }
        this.handleKeyDown(e)
    }
    handleKeyDown(e) {
        const user = {
            "_id": "u101",
            "fullName": "Gal Rondel",
            "imgUrl": "././img/troll.jpg"
        }
        if (e.key === 'Enter') {
            if (!e.target.value) this.setState({ isEdit: false })
            else {
                const { updateBoard, board, list } = this.props
                this.setState({ isEdit: false })
                var newCard = {
                    id: this.makeId(),
                    title: e.target.value,
                    labels: [],
                    createdBy: user,
                    cardMembers: [],
                    desc: null,
                    dueDate: null,
                    checkLists: [],
                    attachments: [],
                    comments: []
                }
                const idx = board.cardLists.findIndex(currList => currList.id === list.id)
                const newBoard = { ...board }
                newBoard.cardLists[idx].cards.push(newCard)
                this.props.setActivites({ fullName: 'Guest' }, {name: 'Add',item: `new card:\"${e.target.value}\"`})
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
                    <Link to="#" className="add-card-btn"><span><FaPlus /></span>Add Card</Link>
                </div>
            )
        } else {
            return (
                <div className="add-card-container flex align-center">
                    <TextareaAutosize className="add-card-inp" placeholder="enter title for this card" onKeyDown={(e) => { this.handleKeyDown(e) }}></TextareaAutosize>
                    <button className="add-card-btn" onClick={this.addCard}>save</button>
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