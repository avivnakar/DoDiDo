import React, { Component } from 'react';
import { useState } from 'react';
export class CardTitle extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    handleKeyDown(e) {
        this.props.card.desc = e.target.value
        if (e.key === 'Enter') {
            this.setState({
                isEdit: false
            })
        }
    }
    editEnd=()=>{}
    render() {
        const { onEdit } = this
        const { title, updateBoard } = this.props
        return this.state.isEdit ?
            <input type="text" onBlur={updateBoard} placeholder="Ent" value={this.props.card.desc} onKeyDown={(e) => { this.handleKeyDown(e) }} /> :
            <h3 onClick={onEdit} className="card-title">{title}</h3>


    }
}
