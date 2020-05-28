import React, { Component } from 'react'
import { TodoPreview } from './TodoPreview.jsx';
import { AddTodo } from './AddTodo.jsx';
// import { FaTimes } from "react-icons/fa";

export class CardCheckList extends Component {
    progressBar() {
        const { checkList } = this.props
        const numOfTodos = checkList.todos.length
        const multi = 100 / numOfTodos
        var done = 0
        checkList.todos.forEach(todo => {
            if (todo.isDone) done++;
        });
        const number = done * multi;
        console.log(number); 
        if(isNaN(number)) return 'no todos yet'
        else return number
    }
    remove = () => {
        const { checkList, card, board, updateBoard } = this.props
        var idx = card.checkLists.findIndex(chxlist => chxlist.id === checkList.id)
        card.checkLists.splice(idx, 1)
        updateBoard(board)
    }
    render() {
        const { checkList, board, updateBoard } = this.props
        return (
            <div className='checklist'>
                <div className="checklist-title flex space-between align-center">
                    <div>{checkList.title}</div>
                    {checkList.todos && <div>{this.progressBar()}<span>%</span></div>}
                    <button className="del-check-btn" onClick={this.remove}>Delete</button>
                </div>
                {checkList.todos && checkList.todos.map((todo) => <TodoPreview board={board} updateBoard={updateBoard} key={todo.id} todo={todo} />)}
                <AddTodo board={board} updateBoard={updateBoard} checkList={checkList} />
            </div>
        )
    }
}
