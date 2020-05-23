import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";

export class AddList extends Component {
    state = {
        isEdit: null
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            if (!e.target.value) this.setState({ isEdit: null })
            else {
                this.setState({ isEdit: null })
                console.log(this.props.board);
                var newList ={
                    id: this.makeId(),
                    title: e.target.value,
                    cards: []
                }
                this.props.board.cardLists.push(newList)
                this.props.updateBoard(this.props.board)
            }
        }
    }
    makeId(length=4) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        for(let i=0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    
        return text;
    }
    getAddList() {
        if (!this.state.isEdit) {
            return <a className="add-card-btn"><span><FaPlus /></span>Add List</a>
        } else {
            return (
                <input placeholder="enter list name" onKeyDown={(e) => { this.handleKeyDown(e) }} />
            )
        }
    }
    render() {
        return (
            <div style={{ marginTop: 100, marginLeft: 50, cursor: 'pointer' }} onClick={() => this.onEdit()}>
                {this.getAddList()}
            </div>
        )
    }
}