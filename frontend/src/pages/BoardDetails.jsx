import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListPreiview } from '../cmps/board/ListPreiview.jsx';
import { CardDetails } from '../cmps/card/CardDetails.jsx';
import { setBoard,updateBoard } from '../store/actions/boardActions.js';
import { boardService } from '../services/boardService.js';
import { DragDropContext } from 'react-beautiful-dnd';

export class _BoardDetails extends Component {
    state = {
        currCard: null
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
        const {board} = this.props
        const { destination, source, draggableId } = result;
        if(!destination) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        const {destListIdx,srcListIdx, cardMoved} = board.cardLists.reduce((acc,list,idx)=>{
            if(source.droppableId === list.id) {
                acc.srcListIdx = idx
                acc.cardMoved = list.cards.find(card => card.id === draggableId) 
            }
            if(destination.droppableId === list.id) acc.destListIdx = idx
            return acc;
        },{})
        board.cardLists[srcListIdx].cards.splice(source.index,1)
        board.cardLists[destListIdx].cards.splice(destination.index,0,cardMoved)
        this.props.updateBoard(board)
    };
    render() {
        const { board } = this.props;
        if (board) {
            console.log(board.cardLists);
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <React.Fragment>
                        {this.state.currCard && <CardDetails card={this.state.currCard} members={board.members} />}
                        <div className="list-container">
                            {board.cardLists && board.cardLists.map(list => <ListPreiview key={list.id} list={list} getCurrCard={this.getCurrCard} />)}
                        </div>
                        {/* <pre style={{textAlign:"left"}}>{board && JSON.stringify(board, null, 2).split('"').join('')}</pre> */}
                    </React.Fragment>
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
