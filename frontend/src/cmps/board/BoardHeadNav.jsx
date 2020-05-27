import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BoardTitle } from './BoardTitle.jsx'
import { MiniUser } from '../MiniUser';
export function BoardHeadNav(props) {
    function notFunc() {
        return
    }
    return (
        <header className="board-header flex space-between justify-center align-center">
            <div className="name-container flex space-between">
                <BoardTitle board={props.board} updateBoard={props.updateBoard} />
                <span className="user-logo">Y</span>
                <span className="user-logo">G</span>
                <span className="user-logo">A</span>
            </div>
            {/* <MiniUser users={props.board.members} command={notFunc} /> */}
            <div className="board-menu  flex">
                <Link to="#" className="board-sec-nav-icons trash"><FaTrashAlt /></Link>
                <Link to="#" className="board-sec-nav-icons">Add Members</Link>
                <Link to="#" className="board-sec-nav-icons">Statistics</Link>
                <Link to="#" className="board-sec-nav-icons">Board Menu</Link>
            </div>
        </header>
    )

}


