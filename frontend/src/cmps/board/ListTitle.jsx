import React, { Component } from 'react'

export class ListTitle extends Component {
    state = {
        isEdit: null
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
    }
    onBlur(e){
        this.handleKeyDown(e,true)
    }
    handleKeyDown(e,blur=false) {
        const { board, list } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                list.title = e.target.placeholder
                this.setState({
                    isEdit: null
                })
            }
            else {
                list.title = e.target.value
                this.setState({
                    isEdit: null
                })
            }
            this.props.updateBoard(board)
        }
    }
    getTitle() {
        if (this.props.list.title && !this.state.isEdit) {
            return <div onClick={() => this.onEdit()}>{this.props.list.title}</div>
        } else if (this.props.list.title) return <input placeholder={this.props.list.title} onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getTitle()
        )
    }
}
