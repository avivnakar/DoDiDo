import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';
import { CreateBoard } from '../cmps/board/CreateBoard.jsx';
import { connect } from 'react-redux';
import { loadBoards } from '../store/actions/boardActions.js';

export class _Boards extends Component {
    componentDidMount() {
        this.loadBoards()
    }

    loadBoards = () => {
        this.props.loadBoards()
    }

    render() {
        return (
            <section>
                <a>+Create new board</a>
                <CreateBoard />

                <div className="list-container">
                    <BoardsList boards={this.props.boards} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        // boards: state.Boards.boards,
<<<<<<< HEAD
        boards: [{ _id: '1', name: 'rondelicious', background: '../logo192.png' }],
=======
        boards: [{ _id: '0', name: '+Create new board', background: '' }, { _id: '1', name: 'rondelicious', background: '../3.jpg' }, { _id: '2', name: 'Yuval', background: '../5.jpg' }, { _id: '2', name: 'Aviv', background: '../4.jpg' }],
>>>>>>> yuval
        // filter: state.Boards.filter
        // loadBoards: function () { console.log('loading boards') }
    }
}
const mapDispatchToProps = {
    loadBoards
}
export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)
