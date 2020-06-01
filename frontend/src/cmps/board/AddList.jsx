import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

export class AddList extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    onBlur(e) {
        console.log(!e.target.value);

        if (!e.target.value) this.setState({ isEdit: false })
        else this.handleKeyDown(e, true)
    }
    handleKeyDown(e, blur = false) {
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) this.setState({ isEdit: false })
            else {
                this.setState({ isEdit: false })
                var newList = {
                    id: this.makeId(),
                    title: e.target.value,
                    cards: []
                }
                this.props.board.cardLists.push(newList)
                this.props.updateBoard(this.props.board)
                this.props.setActivites({ fullName: 'Guest' }, {name: 'Add',item: e.target.value})
            }
        }
    }
    makeId(length = 4) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0;i < length;i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    getAddList() {
        if (!this.state.isEdit) {
            return <Link to="#" className="add-list-btn"><span><FaPlus /></span>Add List</Link>
        } else {
            return (
                <input placeholder="enter list name" onKeyDown={(e) => { this.handleKeyDown(e) }} onBlur={(e) => { this.onBlur(e) }} />
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