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
    componentDidMount() {
        {/* {this.state.currCard && <CardDetails card={this.state.currCard} members={board.members} />} */ }
        // const id = this.props.match.params.cardId;
        // this.props.loadBoards()
        //     .then(() => {
        //         const { boards } = this.props;
        //         const { currBoard, currCard } = boards.reduce((acc, board) => {
        //             const tempCard = board.cardLists.reduce((accu, list) => {
        //                 accu = accu ? accu : list.cards.find(card => card.id === id);
        //                 return accu;
        //             }, null);
        //             if (tempCard) {
        //                 acc.currCard = tempCard;
        //                 acc.currBoard = board;
        //             }
        //             return acc;
        //         }, {});
        //         console.log(currBoard, currCard);
        //         const { setCard, setBoard } = this.props;
        //         setBoard(currBoard);
        //         console.log('card:',currCard);

        //         setCard(currCard);
        //     })
    }

    addMembers() {
        this.setState({
            addTo: 'members'
        })
    }
    render() {
        const { card, board, updateBoard } = this.props
        console.log('card and board', card, board);

        if (card && board ) {
            return (
                <section className="card-details" >
                    <div>
                        <CardTitle title={card.title} />
                        <CardLabel />
                        {card.cardMembers && <div><MiniUser users={card.cardMembers} /><button>+Add</button></div>}
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
                        {this.state.addTo === 'members' && <AddMembers boardUsers={board.members} cardMembers={card.cardMembers} />}
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

