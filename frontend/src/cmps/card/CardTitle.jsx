import React, { Component } from 'react';

export class CardTitle extends Component {
    state = {
        isEdit: null
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
                    isEdit: null
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
            return <h2 onClick={() => this.onEdit()}>{this.props.card.title}</h2>
        } else if (this.props.card.title) return <input placeholder={this.props.card.title} onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getTitle()
        )
    }
}