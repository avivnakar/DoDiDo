import React, { Component } from 'react'

export class AddTodo extends Component {
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
    handleKeyDown = (e, blur = false) => {
        const { board, checkList } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                this.setState({
                    isEdit: false
                })
            }
            else {
                var newTodo = {
                    id: this.makeId(),
                    title: e.target.value,
                    isDone: false
                }
                this.setState({
                    isEdit: false
                })
                checkList.todos.push(newTodo)
            }
            this.props.updateBoard(board)
        }
    }
    makeId(length = 4) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    getAddTodo() {
        if (!this.state.isEdit) {
            return <div onClick={() => this.onEdit()} className="add-list-btn add-todo-btn">Add an Item</div>
        } else return <input placeholder="Add an Item"
            onBlur={(e) => { this.onBlur(e) }}
            onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getAddTodo()
        )
    }
}
