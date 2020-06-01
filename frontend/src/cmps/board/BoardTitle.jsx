import React, { Component } from 'react'

export class BoardTitle extends Component {
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
    handleKeyDown(e, blur = false) {
        const { board } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                board.name = e.target.placeholder
                this.setState({
                    isEdit: false
                })
            }
            else {
                board.name = e.target.value
                this.setState({
                    isEdit: false
                })
            }
            this.props.updateBoard(board)
            this.props.setActivites({ fullName: 'Guest' }, {name: 'Change',item: 'Board title', dest: board.name})

        }
    }
    getTitle() {
        const { board } = this.props
        if (!this.state.isEdit) {
            return <div className="board-name" onClick={() => this.onEdit()}>{board.name}</div>
        } else return <input placeholder={board.name} onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getTitle()
        )
    }
}
