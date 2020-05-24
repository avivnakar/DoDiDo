import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListPreiview } from '../cmps/board/ListPreiview.jsx';
import { AddList } from '../cmps/board/AddList.jsx';
import { CardDetails } from '../cmps/card/CardDetails.jsx';
import { setBoard, updateBoard } from '../store/actions/boardActions.js';
import { boardService } from '../services/boardService.js';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


class _BoardDetails extends Component {
    state = {
        currCard: null,
    }
    componentDidMount() {
        const id = this.props.match.params.boardId;
        boardService.getById(id)
            .then(board => this.props.setBoard(board))
    }
    getCurrCard = (card) => {
        this.setState({
            currCard: card
        })
    }
    onDragEnd = result => {
        const { board } = this.props
        const { destination, source, draggableId, type } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        if (type === 'column') {
            console.log(result);
            var list = board.cardLists.find(list => list.id === draggableId)
            board.cardLists.splice(source.index, 1)
            board.cardLists.splice(destination.index, 0, list)
        } else {
            const { destListIdx, srcListIdx, cardMoved } = board.cardLists.reduce((acc, list, idx) => {
                if (source.droppableId === list.id) {
                    acc.srcListIdx = idx
                    acc.cardMoved = list.cards.find(card => card.id === draggableId)
                }
                if (destination.droppableId === list.id) acc.destListIdx = idx
                return acc;
            }, {})
            board.cardLists[srcListIdx].cards.splice(source.index, 1)
            board.cardLists[destListIdx].cards.splice(destination.index, 0, cardMoved)
        }
        this.props.updateBoard(board)
    };
    render() {
        const { board } = this.props;
        if (board) {
            var bg = require('../assets/imgs/' + board.background.toString())
            var styleLi = {
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundColor: 'pink',
                backgroundRepeat: 'no-repeat'
            }
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId='all' direction="horizontal" type="column">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {this.state.currCard && <CardDetails card={this.state.currCard} board={board} updateBoard={this.props.updateBoard} />}
                                <div className="board" style={styleLi}>
                                    <div className="div">dsfsdfsfsd</div>
                                    {board.cardLists && board.cardLists.map((list, index) => <ListPreiview key={list.id} list={list} getCurrCard={this.getCurrCard} index={index} board={board} updateBoard={updateBoard} />)}
                                    <AddList board={board} updateBoard={this.props.updateBoard} />
                                </div>
                                {/* <pre style={{textAlign:"left"}}>{board && JSON.stringify(board, null, 2).split('"').join('')}</pre> */}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            );
        } else {
            return (<span>no such board</span>);
        }

    }
}
const mapStateToProps = (state) => {
    return {
        board: state.board.currBoard,
    }
}

const mapDispatchToProps = {
    setBoard,
    updateBoard
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)
