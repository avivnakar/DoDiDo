import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';
import { BoardNav } from '../cmps/board/BoardNav.jsx';
import { CreateBoard } from '../cmps/board/CreateBoard.jsx';
import { connect } from 'react-redux';
import { loadBoards } from '../store/actions/boardActions.js';

export class _Boards extends Component {
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

    render() {
        return (
            <React.Fragment>
                <BoardNav />
                <section className="flex">
                    <div className="list-container">
                        <BoardsList boards={this.props.boards} />
                    </div>
                    <div className="side-bar">
                        {/* <a>+Create new board</a> */}
                        <CreateBoard />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        boards: state.board.boards,
        // boards: [{ _id: '0', name: '+Create new board', background: '' }, { _id: '1', name: 'rondelicious', background: '../3.jpg' }, { _id: '2', name: 'Yuval', background: '../5.jpg' }, { _id: '2', name: 'Aviv', background: '../4.jpg' }],
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
