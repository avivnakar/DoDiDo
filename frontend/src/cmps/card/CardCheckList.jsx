import React, { Component } from 'react'
import { TodoPreview } from './TodoPreview.jsx';
import { AddTodo } from './AddTodo.jsx';

export class CardCheckList extends Component {
    progressBar() {
        const { checkList } = this.props
        const numOfTodos = checkList.todos.length
        const multi = 100 / numOfTodos
        var done = 0
        checkList.todos.forEach(todo => {
            if (todo.isDone) done++;
        });
        return done * multi;
    }
    remove = () => {
        const { checkList, card, board, updateBoard } = this.props
        var idx = card.checkLists.findIndex(chxlist => chxlist.id === checkList.id)
        card.checkLists.splice(idx,1)
        updateBoard(board)
    }
    render() {
        const { checkList, board, updateBoard } = this.props
        return (
            <div>
                <h2>{checkList.title}</h2>
                {checkList.todos && <h4>{this.progressBar()}<span>%</span></h4>}
                <button onClick={this.remove}>Remove</button>
                {checkList.todos && checkList.todos.map((todo) => <TodoPreview board={board} updateBoard={updateBoard} key={todo.id} todo={todo} />)}
                <AddTodo board={board} updateBoard={updateBoard} checkList={checkList} />
            </div>
        )
    }
}
