import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function BoardHeadNav(props) {

    return (
        <header className="board-header flex space-between justify-center align-center">
            <div className="name-container flex space-between">
                <div className="board-name">DoDiDo`s Board</div>
                <span className="user-logo">Y</span>
                <span className="user-logo">G</span>
                <span className="user-logo">A</span>
            </div>
            <div className="board-menu  flex">
                <Link to="#" className="board-sec-nav-icons trash"><FaTrashAlt /></Link>
                <Link to="#" className="board-sec-nav-icons">Add Members</Link>
                <Link to="#" className="board-sec-nav-icons">Statistics</Link>
                <Link to="#" className="board-sec-nav-icons">Board Menu</Link>
            </div>
        </header>
    )

}


