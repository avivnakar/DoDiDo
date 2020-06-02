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
        if(isNaN(number)) return 'no todos yet'
        else return Math.round(number)
    }
    remove = () => {
        const { checkList, card, board, updateBoard,setActivites } = this.props
        var idx = card.checkLists.findIndex(chxlist => chxlist.id === checkList.id)
        setActivites({ fullName: 'Guest' }, {name: 'Del',item: card.checkLists[idx].title})   
        card.checkLists.splice(idx, 1)
        updateBoard(board)
    }
    render() {
        const { checkList, board, updateBoard } = this.props
        return (
            <div className='checklist'>
                <div className="checklist-title flex space-between align-center">
                    <div className="chx-title">{checkList.title}</div>
                    {checkList.todos && <div>{this.progressBar()}<span>%</span></div>}
                    <button className="del-check-btn" onClick={this.remove}>Delete</button>
                </div>
                {checkList.todos && checkList.todos.map((todo) => <TodoPreview setActivites={this.props.setActivites} board={board} updateBoard={updateBoard} key={todo.id} todo={todo} />)}
                <AddTodo setActivites={this.props.setActivites} board={board} updateBoard={updateBoard} checkList={checkList} />
            </div>
        )
    }
}
