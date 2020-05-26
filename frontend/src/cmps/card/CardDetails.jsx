import React, { Component } from 'react'
import { CardDesc } from './CardDesc.jsx';
import { AddMembers } from './AddMembers.jsx';
import { CardTitle } from './CardTitle.jsx';
import { CardCheckLists } from './CardCheckLists.jsx';
import { AddLabels } from './AddLabels.jsx';
import { LabelList } from '../board/LabelList.jsx';
import { MiniUser } from '../MiniUser';

export class CardDetails extends Component {
    state = {
        addTo: null,
        isAddChecklist:false
    }
    addTo(string) {
        switch (string) {
            case 'members':
                this.setState({ addTo: 'members' })
                break;
            case 'labels':
                this.setState({ addTo: 'labels' })
                break;
            case 'check':
                this.setState({ addTo: 'check' })
                break;

        }
    }
    removeMember = (userId) => {
        const { cardMembers, updateBoard, board } = this.props;
        if (cardMembers) {
            var idx = cardMembers.findIndex(member => member._id = userId)
            cardMembers.splice(idx, 1)
            updateBoard(board)
        }
    }
    onAddChecklist = (ev) => {
        this.setState(prevstate=>({isAddChecklist:!prevstate.isAddChecklist}))
    }
    render() {
        const { card, board, updateBoard, history } = this.props
        const { isAddChecklist} = this.state
        const backToBoard = (ev) => {
            history.push(`/b/${board._id}/${board.name}`);
        }
        if (card && board) {
            return (
                <section className="screen flex justify-center" onClick={backToBoard}>
                    <div className="card-details flex" onClick={(ev) => ev.stopPropagation()}>
                        <div >
                            <CardTitle board={board} card={card} updateBoard={updateBoard} />
                            <div className="flex">
                                {card.labels && <div className="flex"><LabelList labels={card.labels} command={console.log} /></div>}
                                {card.cardMembers.length > 0 && <div className="flex"><MiniUser users={card.cardMembers} command={this.removeMember} /><button onClick={() => this.addMembers()}>+</button></div>}
                            </div>
                            <div>
                                <h4>Description</h4>
                                <CardDesc card={card} updateBoard={updateBoard} board={board} />
                            </div>
                            <div>
                                <h4>Activity</h4>
                                <input placeholder="enter comment"/>
                            </div>
                            {card.checklists && <CardCheckLists card={card} updateBoard={updateBoard} board={board}/>}
                            {this.state.addTo === 'check' && <h1>X</h1>}
                        </div>
                        <div className="card-btns flex column">
                            <button onClick={() => this.addTo('members')}>Members</button>
                            <button onClick={() => this.addTo('labels')}>Labels</button>
                            <button onClick={() => this.addTo('check')}>Checklist</button>
                            <button onClick={() => this.addTo('date')}>Due Date</button>
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

