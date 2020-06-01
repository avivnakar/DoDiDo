import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export class CardDesc extends Component {
    state = {
        isEdit: false
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    handleKeyDown(e) {
        const { card } = this.props
        if (e.key === 'Enter') {
            if (card.desc) {
                this.props.setActivites({ fullName: 'Guest' }, { name: 'Change', item: `card \"${card.title}\" description`, dest: `${e.target.value}` })
            } else this.props.setActivites({ fullName: 'Guest' }, { name: 'Add', item: `card description:\"${e.target.value}\"` })
            card.desc = e.target.value
            this.setState({
                isEdit: false
            })
            this.props.updateBoard(this.props.board)
        }
    }
    getDesc() {
        if (this.props.card.desc && !this.state.isEdit) {
            return <div onClick={() => this.onEdit()}>{this.props.card.desc}</div>
        } else if (this.props.card.desc) return <TextareaAutosize placeholder={this.props.card.desc}/*  rows="1"  */ onKeyDown={(e) => { this.handleKeyDown(e) }}></TextareaAutosize >
        else return <TextareaAutosize placeholder="Add a more detailed description" onKeyDown={(e) => { this.handleKeyDown(e) }}></TextareaAutosize>
    }
    render() {
        return (
            this.getDesc()
        )
    }
}

