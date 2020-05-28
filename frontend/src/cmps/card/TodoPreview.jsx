import React, { Component } from 'react'
import { FaTextHeight, FaBluetooth } from 'react-icons/fa'

export class TodoPreview extends Component {
    state = {
        isEdit: false,
        styleCube: {}
    }
    componentDidMount() {
        this.isDone()
    }
    isDone() {
        if (this.props.todo.isDone) {
            this.setState({
                styleCube: {
                    display: 'inline-block',
                    width: 15,
                    height: 15,
                    border: '1px solid #0000008f',
                    borderRadius: 2,
                    backgroundColor: 'rgba(9, 30, 66, 0.25)'
                }
            })
        }
        else {
            this.setState({
                styleCube: {
                    display: 'inline-block',
                    width: 15,
                    height: 15,
                    border: '1px solid #0000008f',
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    boxshadow: 'inset 0 0 0 2px #dfe1e6'

                }
            })
        }
    }
    isEdit = () => {
        this.setState(prevState => ({ isEdit: !prevState.isEdit }))
    }
    getTitle() {
        const { todo } = this.props
        if (this.state.isEdit) {
            return (
                <input placeholder={todo.title} onBlur={(e) => { this.onBlur(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
            )
        }
        else {
            return <span onClick={this.isEdit}>{todo.title}</span>
        }
    }
    onBlur(e) {
        this.handleKeyDown(e, true)
    }
    handleKeyDown(e, blur = false) {
        const { board, todo } = this.props
        if (e.key === 'Enter' || blur) {
            if (!e.target.value) {
                todo.title = e.target.placeholder
                this.setState({
                    isEdit: false
                })
            }
            else {
                todo.title = e.target.value
                this.setState({
                    isEdit: false
                })
            }
            this.props.updateBoard(board)
        }
    }
    doneTodo = () => {
        const { todo, updateBoard, board } = this.props
        todo.isDone = (todo.isDone) ? false : true
        updateBoard(board)
        this.isDone()
    }
    render() {
        const { todo } = this.props
        return (
            <div>
                <span className='mark-cube' style={this.state.styleCube} onClick={this.doneTodo}></span>
                {this.getTitle()}
            </div>
        )
    }
}
