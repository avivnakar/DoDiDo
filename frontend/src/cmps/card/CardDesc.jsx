import React, { Component } from 'react';

export class CardDesc extends Component {
    state = {
        isEdit: null
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
                isEdit: null
            })
            this.props.updateBoard(this.props.board)
        }
    }
    getDesc() {
        console.log('curr card:', this.props.card);
        if (this.props.card.desc && !this.state.isEdit) {
            return <div onClick={() => this.onEdit()}>{this.props.card.desc}</div>
        } else if (this.props.card.desc) return <textarea placeholder={this.props.card.desc} onKeyDown={(e) => { this.handleKeyDown(e) }}></textarea >
        else return <textarea placeholder="Add a more detailed description" onKeyDown={(e) => { this.handleKeyDown(e) }}></textarea>
    }
    render() {
        return (
            this.getDesc()
        )
    }
}

