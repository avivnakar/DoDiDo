import React, { Component } from 'react'
import { CardDesc } from './CardDesc.jsx';
import { AddMembers } from './AddMembers.jsx';
import { CardTitle } from './CardTitle.jsx';
import { AddLabels } from './AddLabels.jsx';
import { LabelList } from '../board/LabelList.jsx';
import { MiniUser } from '../MiniUser';
const TESTING_CHEKLIST = {
    id: 1,
    title: 'checklist 22',
    todos: [
        {
            id: '14sf3',
            text: 'lorem blabla bla bla bla',
            doneAt: Date.now(),
            doneBy: '{mini user}'
        },
        {
            id: '14wsf3',
            text: 'labla bla bla bla loremb',
            doneAt: null,
            doneBy: '{mini user}'
        }
    ]
};
export class CardDetails extends Component {
    state = {
        addTo: null
    }
    addMembers() {
        this.setState({ addTo: 'members' })
    }
    addLabels() {
        this.setState({ addTo: 'labels' })
    }
    onAddChecklist = (ev) => {

    }
    render() {
        const { card, board, updateBoard, history } = this.props
        const backToBoard = (ev) => {
            history.push(`/b/${board._id}/${board.name}`);
        }
        if (card && board) {
            const { onAddChecklist } = this
            return (
                <section className="screen flex justify-center" onClick={backToBoard}>
                    <div className="card-details flex" onClick={(ev) => ev.stopPropagation()}>
                        <div >
                            <CardTitle title={card.title} />
                            <div className="flex">
                                {card.labels && <div className="flex"><LabelList labels={card.labels} /><button>+Add Label</button></div>}
                                {card.cardMembers.length > 0 && <div className="flex"><MiniUser users={card.cardMembers} /><button>+Add Member</button></div>}
                            </div>
                            <div>
                                Description
                                    <CardDesc card={card} updateBoard={updateBoard} board={board} />
                            </div>
                            <div>
                                <h4>Description</h4>
                                <Checklist checklist={TESTING_CHEKLIST} />
                            </div>
                            {card.checklists && 'popo'}
                        </div>
                        <div className="card-btns flex column">
                            <button onClick={() => this.addMembers()}>Members</button>
                            <button onClick={() => this.addLabels()}>Labels</button>
                            <button onClick={onAddChecklist}>Checklist</button>
                            <button>Due Date</button>
                            <button>Attachment</button>
                            {this.state.addTo === 'members' && <AddMembers boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'labels' && <AddLabels cardLabels={card.labels} board={board} updateBoard={updateBoard} />}
                        </div>
                    </div>
                </section>
            )
        } else return <div>עוד רגע כפרע</div>
    }
}
class AddChecklist extends Component {
    state = {
        title: ''
    }

    render() {
        const antin = "popsidgs"
        return <div className="pop-over">
            <h5>Add Checklist</h5>
            <br />
            <input htmlFor={antin} type="text" title="" onChange={() => { }} />

            <datalist id={antin}></datalist>
        </div>
    }
}
function Checklist(props) {
    const { checklist } = props
    const { todos, title } = checklist

    return (<>
        <h5>{title}</h5>
        <ul>
            {todos.map(todo => (
                <li className="todo" key={todo.id} >
                    <input type="checkbox" checked={todo.doneAt && true} />
                    < div > {todo.text}</div>
                    <button>Add an item</button>
                        {'<MiniUser/>'}
                </li>
            ))}
        </ul>
    </>)
}

/**
 * cheklist template
 * {id: 1,
  title:'checklist 22',
	todos: [
  	{
      id: '14sf3',
    	text: 'lorem blabla bla bla bla',
    	doneAt : Date.now(),
    	doneBy : '{mini user}'
  	}
	]
}

 */