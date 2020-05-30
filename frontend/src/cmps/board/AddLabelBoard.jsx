import React, { Component } from 'react'

export class AddLabelBoard extends Component {
    state = {
        color: null,
        title: null
    }
    titlePick = ({ target }) => {
        this.setState({ title: target.value })
    }
    colorPick = ({ target }) => {
        this.setState({ color: target.value })
    }
    add = () => {
        const { board, updateBoard } = this.props
        const newLabel={
            id: this.makeId(),
            title: this.state.title,
            color: this.state.color
        }
        board.labels.push(newLabel)
        updateBoard(board)
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
            <div className="label-modal">
            <div className="flex space-between align-center">
                <input onChange={this.titlePick} placeholder="add new Label title" />
                <input type="color" onChange={this.colorPick} />
            </div>
                <button className="add-member-btn" onClick={this.add}>Save</button>
</div>
        )
    }
}
