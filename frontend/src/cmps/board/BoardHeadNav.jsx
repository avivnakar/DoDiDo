import React, { Component } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BoardTitle } from './BoardTitle.jsx'
import { MiniUser } from '../MiniUser';
import { BoardMenu } from '../board/BoardMenu';

// export function BoardHeadNav(props) {
export class BoardHeadNav extends Component {
    state = {
        isOpenMenu: false
    }
    toggleBoardMenu = () => {
        this.setState(prevState => ({ isOpenMenu: !prevState.isOpenMenu }))
        console.log(this.state.isOpenMenu);

    }
    render() {
        return (
            <header className="board-header flex space-between justify-center align-center" >
                <div className="name-container flex space-between">
                    <BoardTitle board={this.props.board} updateBoard={this.props.updateBoard} />
                    {this.state.isOpenMenu && <BoardMenu toggleBoardMenu={this.toggleBoardMenu} board={this.props.board} updateBoard={this.props.updateBoard} />}
                    {/* <MiniUser users={props.board.members} command={() => { }} /> */}
                    <span className="user-logo">Y</span>
                    <span className="user-logo">G</span>
                    <span className="user-logo">A</span>
                </div>
                <div className="board-menu  flex">
                    <Link to="#" className="board-sec-nav-icons trash"><FaTrashAlt /></Link>
                    <Link to="#" className="board-sec-nav-icons">Add Members</Link>
                    {/* <Link to="#" className="board-sec-nav-icons">Statistics</Link> */}
                    <Link to="#" className="board-sec-nav-icons" onClick={this.toggleBoardMenu}>Board Menu</Link>
                </div>
            </header>
        )
    }

}


