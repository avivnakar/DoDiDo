import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListPreiview } from '../cmps/board/ListPreiview.jsx';
import { AddList } from '../cmps/board/AddList.jsx';
import { CardDetails } from '../cmps/card/CardDetails.jsx';
import { setBoard, updateBoard, setCard, loadBoards } from '../store/actions/boardActions.js';
import { boardService } from '../services/boardService.js';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
class _BoardDetails extends Component {
    state = {
        currCard: null,
        match: null
    }
    componentDidMount() {
        this.setState({ match: this.props.match }, this.switchRoute);
    }
    componentDidUpdate(prevProps) {
        if (this.state.match !== this.props.match) {
            console.log('board update!');
            
            this.setState({ match: this.props.match }, this.switchRoute)
        }
        {
            let { history, location, match } = prevProps;
            console.log('prev', history, location, match);
        }
        let { history, location, match } = this.props;
        console.log('props', history, location, match)
        if (location !== this.props.location) {

        }

    }
    switchRoute = () => {
        const { boardId, cardId } = this.state.match.params
        var id
        if (boardId) {
            id = boardId;
            boardService.getById(id)
                .then(board => this.props.setBoard(board))
            // .then(() => setTimeout(() => {
            //     this.props.history.push('/c/5c09/Do It');
            //     this.switchRoute();
            // }, 5000))
        } else {
            id = cardId;
            this.props.loadBoards()
                .then(() => {
                    const { boards } = this.props;
                    const { currBoard, currCard } = boards.reduce((acc, board) => {
                        const tempCard = board.cardLists.reduce((accu, list) => {
                            return accu ? accu : list.cards.find(card => card.id === id);
                        }, null);
                        if (tempCard) acc = { currCard: tempCard, currBoard: board }
                        return acc;
                    }, {});
                    const { setCard, setBoard } = this.props;
                    setBoard(currBoard);
                    setCard(currCard);
                })
        }
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
        const { cardId } = this.props.match.params

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
                                {this.props.card && <CardDetails card={this.props.card} board={board}
                                    updateBoard={this.props.updateBoard} history={this.props.history} />}
                                <div className="board" style={styleLi}>
                                    {board.cardLists && board.cardLists.map((list, index) => <ListPreiview
                                        key={list.id} list={list} getCurrCard={this.getCurrCard} index={index}
                                        board={board} updateBoard={updateBoard} history={this.props.history} />)}
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
        card: state.board.currCard,
        boards: state.board.boards
    }
}

const mapDispatchToProps = {
    setBoard,
    updateBoard,
    loadBoards,
    setCard
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)
