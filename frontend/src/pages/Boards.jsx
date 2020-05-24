import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';
import { CreateBoard } from '../cmps/board/CreateBoard.jsx';
import { connect } from 'react-redux';
import { loadBoards } from '../store/actions/boardActions.js';
import { Link } from 'react-router-dom';

class _Boards extends Component {
    state = {
        isAddBoard: false
    }
    componentDidMount() {
        this.loadBoards()
    }

    loadBoards = () => {
        try {
            this.props.loadBoards()
        } catch (err) {
            console.error(err);
        }
    }

    addBoard = () => {
        this.setState(prevState => ({ isAddBoard: !prevState.isAddBoard }))
    }

    render() {
        return (
            <section className="list-warper">
                <div className="list-container flex">
                    <Link to="#" onClick={this.addBoard} className="add-board">+Create new board</Link>
                    <BoardsList boards={this.props.boards} />
                </div>
                <div className="side-bar">
                    {this.state.isAddBoard && <CreateBoard addBoard={this.state.isAddBoard} />}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        boards: state.board.boards,
        // boards: [{ _id: '10', name: '+Create new board', background: '' }, { _id: '11', name: 'rondelicious', background: '../3.jpg' }, { _id: '12', name: 'Yuval', background: '../5.jpg' }, { _id: '32', name: 'Aviv', background: '../4.jpg' }],
        // filter: state.Boards.filter
        // loadBoards: function () { console.log('loading boards') }
    }
}
const mapDispatchToProps = {
    loadBoards
    //, addBoard
    //, updateBoards
}
export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)
