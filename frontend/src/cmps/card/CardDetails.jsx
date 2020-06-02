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
import { SwatchesPicker } from 'react-color';
import { ShareCard } from './ShareCard.jsx';
import { utilService } from '../../services/utilService.js';

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
    addImage = (ev) => {
        const { card } = this.props
        utilService.uploadImg(ev)
            .then(url => {
                if (card.attachments[0]) {
                    card.attachments[0] = url
                    this.props.setActivites({ fullName: 'Guest' }, {name: 'Change',item: 'photo', dest: url})
                }
                else {
                    card.attachments.push(url)
                    this.props.setActivites({ fullName: 'Guest' }, {name: 'Add',item: `new photo:"${url}"`})
                }
                this.props.updateBoard(this.props.board)
            })
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
            default:
                console.log('addTo switch case reached default state');
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
            this.props.setActivites({ fullName: 'Guest' }, {name: 'Del',item: cardMembers[idx].title})
            cardMembers.splice(idx, 1)
            updateBoard(board)
        }
    }
    onAddChecklist = (ev) => {
        this.setState(prevstate => ({ isAddChecklist: !prevstate.isAddChecklist }))
    }

    handleChangeComplete = (color) => {
        const { card, board, updateBoard } = this.props
        this.setState({ background: color.hex });
        card.background = color.hex;
        this.props.setActivites({ fullName: 'Guest' }, {name: 'Change',item: `card:"${card.title}"`, dest: `color ${color.hex}`})
        updateBoard(board);
        this.setState({ isOpenBgColor: false });
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
                            <CardTitle  setActivites={this.props.setActivites} board={board} card={card} updateBoard={updateBoard} />
                            <CardToWhatsapp card={card} setActivites={this.props.setActivites}/>

                            <div className="flex">
                                {card.cardMembers.length > 0 && <div className="flex align-center"><MiniUser users={card.cardMembers} command={this.removeMember} />
                                    {card.labels && <div className="flex"><LabelList labels={card.labels} command={console.log} /></div>}
                                </div>}
                            </div>
                            <img src={card.attachments[0]} alt={`attachment-${0}`} />
                            <div className="description-container">
                                <div className="card-title">Description</div>
                                <CardDesc setActivites={this.props.setActivites} card={card} updateBoard={updateBoard} board={board} />
                            </div>
                            {card.dueDate && <div>
                                Due Time
                                <div><Due dueDate={card.dueDate} setActivites={this.props.setActivites}/></div>
                            </div>}
                            {card.checkLists.length > 0 && <div>
                                <div className="card-title">Checklists</div>
                                {card.checkLists.map((checkList) => <CardCheckList setActivites={this.props.setActivites} key={checkList.id} card={card} checkList={checkList} updateBoard={updateBoard} board={board} />)}
                            </div>}
                            {this.state.addTo === 'check' && <AddCheckList setActivites={this.props.setActivites} clearAddTo={clearAddTo} card={card} updateBoard={updateBoard} board={board} />}
                            <div>
                                <div className="card-title">Activity</div>
                                <AddComment setActivites={this.props.setActivites} card={card} updateBoard={updateBoard} board={board} />
                                {card.comments && <CardComments card={card} updateBoard={updateBoard} board={board} />}
                            </div>
                        </div>
                        <aside className="card-btns flex column">
                            <div className="card-title add-buttons">ADD TO CARD</div>
                            <button onClick={() => this.addTo('members')}>Members</button>
                            <button onClick={() => this.addTo('labels')}>Labels</button>
                            <button onClick={() => this.addTo('check')}>Checklist</button>
                            <button onClick={() => this.addTo('date')}>Due Date</button>
                            <label className="button" htmlFor="imgUpload" /* onClick={() => this.addTo('cover')} */>Images</label>
                            <input name="imgUpload"
                                id="imgUpload"
                                type="file"
                                onChange={(ev) => this.addImage(ev)}
                                hidden />
                            <button onClick={() => this.addTo('bg')}>Background Color</button>
                            {isOpenBgColor && <div className="bg-modal">

                                <SwatchesPicker
                                    className="color-picker"
                                    color={this.state.background}
                                    onChangeComplete={this.handleChangeComplete}
                                />
                            </div>}

                            <div className="card-title">ACTIONS</div>
                            <button onClick={() => this.addTo('members')}>Move</button>
                            <button onClick={() => this.addTo('labels')}>Copy</button>
                            <button onClick={() => this.addTo('check')}>Share</button>
                            <ShareCard card={card} />
                            <button onClick={() => this.addTo('date')}>Archive</button>
                            {this.state.addTo === 'members' && <AddMembers setActivites={this.props.setActivites} clearAddTo={this.clearAddTo} boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'labels' && <AddLabels setActivites={this.props.setActivites} clearAddTo={this.clearAddTo} cardLabels={card.labels} board={board} updateBoard={updateBoard} />}
                            {this.state.addTo === 'date' && <AddDueTime setActivites={this.props.setActivites} clearAddTo={this.clearAddTo} card={card} board={board} updateBoard={updateBoard} />}
                        </aside>
                    </div>
                </section>
            )
        } else return <div>עוד רגע כפרע</div>
    }
}

