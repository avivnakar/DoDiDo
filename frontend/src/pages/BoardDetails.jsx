import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListPreiview } from '../cmps/board/ListPreiview.jsx';
import { AddList } from '../cmps/board/AddList.jsx';
import { CardDetails } from '../cmps/card/CardDetails.jsx';
import { setBoard, updateBoard, updateBoardSync, setCard, loadBoards, removeCard } from '../store/actions/boardActions.js';
import { boardService } from '../services/boardService.js';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { BoardHeadNav } from '../cmps/board/BoardHeadNav.jsx';
import { socketService } from '../services/socketService.js';
import { ClickAway } from '../cmps/ClickAway.jsx';
import { CardMenu } from '../cmps/card/CardMenu.jsx';
import { eventBus } from '../services/eventBusService.js';
import { utilService } from '../services/utilService.js';

class _BoardDetails extends Component {
    state = {
        currCard: null,
        match: null,
        style: {},
        drag: {},
        div: null
    }
    componentDidMount() {
        this.setState({ match: this.props.match }, this.switchRoute);
        socketService.on('update board', board => {
            if (board.updatedAt > this.props.board.updatedAt)
                this.props.updateBoardSync(board)
        });
        eventBus.on('open_card_menu', ev => {
            console.log('ev', ev)
            const { bottom, height, left, right, top, width, x, y } = ev

            const style = { height, left, top, width, x, y, backgroundColor: 'red', position: 'absolute' }
            console.log('style', style)
            this.setState({ div: style })
        })
    }
    componentDidUpdate(prevProps) {
        if (this.state.match !== this.props.match) {
            this.setState({ match: this.props.match }, this.switchRoute)
        }
    }
    switchRoute = () => {
        const { boardId, cardId } = this.state.match.params
        var id
        if (boardId) {
            socketService.emit('listen board', boardId);
            id = boardId;
            this.props.setCard(null);
            boardService.getById(id)
                .then(board => this.props.setBoard(board))
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
                    socketService.emit('listen board', currBoard._id);
                    setBoard(currBoard);
                    setCard(currCard);
                })
        }
    }
    setActivites = (user = { fullName: 'Guest' }, action) => {
        const { board, updateBoard } = this.props;
        if (action) {
            if (action.name === 'Del') var text = `${action.item} was deleted By ${user.fullName}`
            if (action.name === 'Change') var text = `${action.item} was changed to ${action.dest} By ${user.fullName}`
            if (action.name === 'Add') var text = `${action.item} was added By ${user.fullName}`
            if (action.name === 'Moved') var text = `${action.item} was moved from ${action.src} to ${action.dest} By ${user.fullName}`
            var activity = {
                id: utilService.makeId(),
                donetBy: user,
                text,
                donetAte: Date.now()
            }
            console.log(activity.text);  
            board.activities.push(activity)
            updateBoard(board)
        }

    }
    getCurrCard = (card) => {
        this.setState({
            currCard: card
        })
    }
    onPick = (start) => {
        const { board } = this.props
        if (start.type === 'task') {
            this.setState({ drag: start })
            const idx = board.cardLists.findIndex(list => list.id === start.source.droppableId)
            var card = board.cardLists[idx].cards.find(card => card.id === start.draggableId)
            console.log('card you dragging:', card);
            this.setState({ style: { backgroundColor: '#c7c7c7' } })
        }
    }
    onMark = (update) => {
        if (!update.destination) return
        if (update.type === 'task') {
            this.setState({ drag: update })
            console.log(update)
            const { board } = this.props
            var idx = board.cardLists.findIndex(list => list.id === update.destination.droppableId)
            var placeholderSpot = board.cardLists[idx].cards[update.destination.index]
            console.log('to where:', placeholderSpot);
            if (placeholderSpot) {

            }
        }
    }
    onDragEnd = result => {
        const { board } = this.props
        const { destination, source, draggableId, type } = result;
        if (result.type === 'task') {
            this.setState({ style: {}, drag: result })
        }
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        if (type === 'column') {
            var list = board.cardLists.find(list => list.id === draggableId)
            board.cardLists.splice(source.index, 1)
            board.cardLists.splice(destination.index, 0, list)
            this.setActivites({ fullName: 'Guest' }, { name: 'Moved', item: list.title, src: source.index, dest: destination.index })
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
            this.setActivites({ fullName: 'Guest' }, { name: 'Moved', item: cardMoved.title, src: board.cardLists[srcListIdx].title, dest: board.cardLists[destListIdx].title })
        }
        this.props.updateBoard(board)
    };

    render() {
        const { board, card, history, updateBoard } = this.props;
        const { drag, div } = this.state;
        const { source, destination } = drag || {};
        const listProps = { history, updateBoard, board }
        if (board) {
            var bg = require('../assets/imgs/' + board.background.toString())
            var styleLi = {
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundColor: 'pink',
                opacity: 0.9,
                backgroundRepeat: 'no-repeat'
            }
            return (
                <DragDropContext onDragStart={this.onPick} onDragEnd={this.onDragEnd} onDragUpdate={this.onMark}>
                    <Droppable droppableId='all' direction="horizontal" type="column">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {card && <CardDetails card={this.props.card} board={board}
                                    updateBoard={this.props.updateBoard} history={this.props.history}
                                    setActivites={this.setActivites} />}
                                <div className="board-head">
                                    <BoardHeadNav board={board} updateBoard={updateBoard} setActivites={this.setActivites}/>
                                </div>
                                <div className="board" style={styleLi}>
                                    {board.cardLists && board.cardLists.map((list, index) => <ListPreiview
                                        key={list.id} list={list} getCurrCard={this.getCurrCard} index={index}
                                        {...source && source.droppableId === list.id ? drag : {}}
                                        {...destination && destination.droppableId === list.id ? drag : {}}
                                        {...listProps} styleCardDrag={this.state.style}
                                        setActivites={this.setActivites} />)}
                                    <AddList board={board} updateBoard={this.props.updateBoard} setActivites={this.setActivites} />
                                    {/* <div style={div}>
                                            here will be a menu
                                        </div> */}
                                </div>
                                {provided.placeholder}
                                {/* <ClickAway /> */}
                                {/* isMenuOpened &&  <CardMenu /* closeMenu={onCloseMenu}  />*/}
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
        boards: state.board.boards,
        user: state.user.user

    }
}

const mapDispatchToProps = {
    setBoard,
    updateBoard,
    updateBoardSync,
    loadBoards,
    setCard,
    removeCard
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)
