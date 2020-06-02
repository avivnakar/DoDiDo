import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';
import { CreateBoard } from '../cmps/board/CreateBoard.jsx';
import { connect } from 'react-redux';
import { loadBoards, addBoard } from '../store/actions/boardActions.js';
import { socketService } from '../services/socketService.js';

class _Boards extends Component {
    state = {
        isAddBoard: false
    }
    componentDidMount() {
        this.loadBoards()
        socketService.on('update boards', this.loadBoards)
    }

    loadBoards = () => {
        try {
            this.props.loadBoards()
        } catch (err) {
            console.error(err);
        }
    }

    toggleBoardMenu = () => {
        this.setState(prevState => ({ isAddBoard: !prevState.isAddBoard }))
    }

    render() {
        return (
            <section className="list-warper">
                <div className="list-container">
                    <BoardsList boards={this.props.boards} toggleBoardMenu={this.toggleBoardMenu} />
                </div>
                <div className="side-bar">
                    {this.state.isAddBoard && <CreateBoard toggleBoardMenu={this.toggleBoardMenu} addBoard={this.props.addBoard} />}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.board.boards,
        user: state.user.user

        // boards: [{ _id: '10', name: '+Create new board', background: '' }, { _id: '11', name: 'rondelicious', background: '../3.jpg' }, { _id: '12', name: 'Yuval', background: '../5.jpg' }, { _id: '32', name: 'Aviv', background: '../4.jpg' }],
        // filter: state.Boards.filter
        // loadBoards: function () { console.log('loading boards') }
    }
}
const mapDispatchToProps = {
    loadBoards
    , addBoard
    //, updateBoards
}
export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)
