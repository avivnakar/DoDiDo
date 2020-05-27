import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BoardTitle } from './BoardTitle.jsx'

export function BoardHeadNav(props) {

    return (
        <header className="board-header flex space-between justify-center align-center">
            <BoardTitle board={props.board} updateBoard={props.updateBoard} />
            <div className="board-menu  flex">
                <Link to="#" className="board-sec-nav-icons trash"><FaTrashAlt /></Link>
                <Link to="#" className="board-sec-nav-icons">Add Members</Link>
                <Link to="#" className="board-sec-nav-icons">Statistics</Link>
                <Link to="#" className="board-sec-nav-icons">Menu</Link>
            </div>
        </header>
    )

}


