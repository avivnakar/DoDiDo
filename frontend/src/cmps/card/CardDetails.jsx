import React, { Component } from 'react'
import { CardDesc } from './CardDesc.jsx';
import { AddMembers } from './AddMembers.jsx';
import { CardTitle } from './CardTitle.jsx';
import { AddLabels } from './AddLabels.jsx';
import { CardLabel } from './CardLabel.jsx';
import { MiniUser } from '../MiniUser';
import { connect } from 'react-redux';
import { updateBoard, setCard, loadBoards, setBoard } from '../../store/actions/boardActions.js';


export class CardDetails extends Component {
    state = {
        addTo: null
    }
    addMembers() {
        this.setState({
            addTo: 'members'
        })
    }
    render() {
        const { card, board, updateBoard } = this.props
        if (card && board ) {
            return (
                <section className="card-details" >
                    <div>
                        <CardTitle title={card.title} />
                        <CardLabel />
                        {card.cardMembers.length>0 && <div><MiniUser users={card.cardMembers} /><button>+Add</button></div>}
                        <div>
                            Description
                        <CardDesc card={card} updateBoard={updateBoard} board={board} />
                        </div>
                    </div>
                    <div className="card-btns">
                        <button onClick={() => this.addMembers()}>Members</button>
                        <button>Labels</button>
                        <button>Checklist</button>
                        <button>Due Date</button>
                        <button>Attachment</button>
                        {this.state.addTo === 'members' && <AddMembers boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard}/>}
                        {this.state.addTo === 'labels' && <AddLabels cardMembers={card.labels} />}
                    </div>
                </section>
            )
        } else return <div>עוד רגע כפרע</div>
    }
}
// const mapStateToProps = (state) => {

//     return {
//         card: state.board.currCard,
//         board: state.board.currBoard,
//         boards: state.board.boards
//     }
// }
// const mapDispatchToProps = {
//     updateBoard,
//     setCard,
//     setBoard,
//     loadBoards
//     //update board/card
//     //get card by id
// }

// export const CardDetails = connect(mapStateToProps, mapDispatchToProps)(_CardDetails)

