import React, { Component } from 'react';
export class CardTitle extends Component {
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
        const { board, card, updateBoard } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                card.title = e.target.placeholder
                this.setState({
                    isEdit: false
                })
            }
            else {
                card.title = e.target.value
                this.setState({
                    isEdit: null
                })
            }
            updateBoard(board)
        }
    }
    getTitle() {
        if (this.props.card.title && !this.state.isEdit) {
            return <div className="card-name" onClick={() => this.onEdit()}>{this.props.card.title}</div>
        } else if (this.props.card.title) return <input placeholder={this.props.card.title} onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getTitle()
        )
    }
}