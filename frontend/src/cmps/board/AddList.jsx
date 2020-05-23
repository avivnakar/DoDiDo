import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";
import { boardService } from '../../services/boardService';

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
            }
        }
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