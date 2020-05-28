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
import { CardToWhatsapp } from '../CardToWhatsapp.jsx';
import { TwitterPicker } from 'react-color'

export class CardDetails extends Component {
    state = {
        addTo: null,
        background: '#f5f6f6',
        isAddChecklist: false,
        isOpenBgColor: false
    }
    componentDidMount() {
        const { card } = this.props
        if (card.background) this.setState({ background: card.background })
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
            case 'bg':
                this.setState({ addTo: 'bg', isOpenBgColor: true })
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

    handleChangeComplete = (color) => {
        const { card, board, updateBoard } = this.props
        console.log(card.background, 'ssssssssssssssssssssssssssssssssss');

        this.setState({ background: color.hex });
        card.background = color.hex;
        updateBoard(board);
        this.setState({ isOpenBgColor: false });
        console.log(card.background, 'ssssssssssssssssssssssssssssssssss');

    };

    render() {
        const { clearAddTo } = this;
        const { card, board, updateBoard, history } = this.props
        const backToBoard = (ev) => {
            history.push(`/b/${board._id}/${board.name}`);
        }
        const { isOpenBgColor } = this.state;

        if (card && board) {
            var bgCard = {
                backgroundColor: this.state.background
            }
            return (
                <section className="screen flex justify-center" onClick={backToBoard}>
                    <div className="card-details flex" style={bgCard} onClick={(ev) => ev.stopPropagation()}>
                        <div className="card-des" >
                            <CardTitle board={board} card={card} updateBoard={updateBoard} />
                            <CardToWhatsapp card={card} />

                            <div className="flex">
                                {card.labels && <div className="flex"><LabelList labels={card.labels} command={console.log} /></div>}
                                {card.cardMembers.length > 0 && <div className="flex"><MiniUser users={card.cardMembers} command={this.removeMember} /><button onClick={() => this.addMembers()}>+</button></div>}
                            </div>
                            <div>
                                <div className="card-title">Description</div>
                                <CardDesc card={card} updateBoard={updateBoard} board={board} />
                            </div>
                            <div>
                                Due Time
                                {card.dueDate && <div><Due dueDate={card.dueDate} /></div>}
                            </div>
                            {card.checkLists && card.checkLists.map((checkList) => <CardCheckList key={checkList.id} card={card} checkList={checkList} updateBoard={updateBoard} board={board} />)}
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
                            <button onClick={() => this.addTo('bg')}>Backgroud Color</button>
                            {isOpenBgColor && <div className="bg-modal">
                                <TwitterPicker
                                    color={this.state.background}
                                    onChangeComplete={this.handleChangeComplete}
                                />
                            </div>}

                            <div className="card-title">ACTIONS</div>
                            <button onClick={() => this.addTo('members')}>Move</button>
                            <button onClick={() => this.addTo('labels')}>Copy</button>
                            <button onClick={() => this.addTo('check')}>Share</button>
                            <button onClick={() => this.addTo('date')}>Archive</button>

                            {this.state.addTo === 'members' && <AddMembers boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'labels' && <AddLabels cardLabels={card.labels} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'date' && <AddDueTime card={card} board={board} updateBoard={updateBoard} />}
                        </aside>
                    </div>
                </section>
            )
        } else return <div>עוד רגע כפרע</div>
    }
}

