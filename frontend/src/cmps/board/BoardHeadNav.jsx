import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function BoardHeadNav(props) {

    return (
        <header className="board-header flex space-between justify-center align-center">
            <div className="board-name">DoDiDo`s Board</div>
            <div className="board-menu  flex">
                <Link to="#" className="board-sec-nav-icons trash"><FaTrashAlt /></Link>
                <Link to="#" className="board-sec-nav-icons">Add Members</Link>
                <Link to="#" className="board-sec-nav-icons">Statistics</Link>
                <Link to="#" className="board-sec-nav-icons">Menu</Link>
            </div>
        </header>
    )

}


