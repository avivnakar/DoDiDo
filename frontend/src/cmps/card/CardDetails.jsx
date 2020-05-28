import React, { Component } from 'react'
import { Due } from '../board/Due.jsx';
import { CardDesc } from './CardDesc.jsx';
import { AddMembers } from './AddMembers.jsx';
import { CardTitle } from './CardTitle.jsx';
import { AddComment } from './AddComment.jsx';
import { CardComments } from './CardComments.jsx';
import { CardCheckList } from './CardCheckList.jsx';
import { AddCheckList } from './AddCheckList.jsx';
import { AddLabels } from './AddLabels.jsx';
import { AddDueTime } from './AddDueTime.jsx';
import { LabelList } from '../board/LabelList.jsx';
import { MiniUser } from '../MiniUser';

export class CardDetails extends Component {
    state = {
        addTo: null,
        isAddChecklist: false
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
            case 'date':
                this.setState({ addTo: 'date' })
                break;

        }
    }
    clearAddTo = () => {
        this.setState({ addTo: null });
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
        this.setState(prevstate => ({ isAddChecklist: !prevstate.isAddChecklist }))
    }
    render() {
        const { clearAddTo } = this;
        const { card, board, updateBoard, history } = this.props
        const backToBoard = (ev) => {
            history.push(`/b/${board._id}/${board.name}`);
        }
        if (card && board) {
            return (
                <section className="screen flex justify-center" onClick={backToBoard}>
                    <div className="card-details flex" onClick={(ev) => ev.stopPropagation()}>
                        <div className="card-des" >
                            <CardTitle board={board} card={card} updateBoard={updateBoard} />
                            <div className="flex">
                                {card.labels && <div className="flex"><LabelList labels={card.labels} command={console.log} /></div>}
                                {card.cardMembers.length > 0 && <div className="flex"><MiniUser users={card.cardMembers} command={this.removeMember} /><button onClick={() => this.addMembers()}>+</button></div>}
                            </div>
                            <div>
                                <div className="card-title">Description</div>
                                <CardDesc card={card} updateBoard={updateBoard} board={board} />
                            </div>
                            {card.dueDate && <div>
                                Due Time
                                <div><Due dueDate={card.dueDate} /></div>
                            </div>}
                            {card.checkLists.length > 0 && <div>
                                <div className="card-title">Chacklist</div>
                                {card.checkLists.map((checkList) => <CardCheckList key={checkList.id} card={card} checkList={checkList} updateBoard={updateBoard} board={board} />)}
                            </div>}
                            {this.state.addTo === 'check' && <AddCheckList clearAddTo={clearAddTo} card={card} updateBoard={updateBoard} board={board} />}
                            <div>
                                <div className="card-title">Activity</div>
                                <AddComment card={card} updateBoard={updateBoard} board={board} />
                                {card.comments && <CardComments card={card} updateBoard={updateBoard} board={board} />}
                            </div>
                        </div>
                        <aside className="card-btns flex column">
                            <div className="card-title add-buttons">ADD TO CARD</div>
                            <button onClick={() => this.addTo('members')}>Members</button>
                            <button onClick={() => this.addTo('labels')}>Labels</button>
                            <button onClick={() => this.addTo('check')}>Checklist</button>
                            <button onClick={() => this.addTo('date')}>Due Date</button>
                            <button onClick={() => this.addTo('cover')}>Images</button>
                            <div className="card-title">ACTIONS</div>
                            <button onClick={() => this.addTo('members')}>Move</button>
                            <button onClick={() => this.addTo('labels')}>Copy</button>
                            <button onClick={() => this.addTo('check')}>Share</button>
                            <button onClick={() => this.addTo('date')}>Archive</button>
                            {this.state.addTo === 'members' && <AddMembers clearAddTo={this.clearAddTo} boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'labels' && <AddLabels clearAddTo={this.clearAddTo} cardLabels={card.labels} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'date' && <AddDueTime clearAddTo={this.clearAddTo} card={card} board={board} updateBoard={updateBoard} />}
                        </aside>
                    </div>
                </section>
            )
        } else return <div>עוד רגע כפרע</div>
    }
}

