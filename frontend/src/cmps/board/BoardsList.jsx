import React from 'react';
import { BoardPreiview } from './BoardPreiview.jsx';
import { Link } from 'react-router-dom';

export function BoardsList(props) {
    const { boards, /* toggleBoardMenu */ } = props;

    function openMenu() {
        props.toggleBoardMenu()
    }
    return (
        <ul className="board-list flex wrap">
            <Link to="#" className="add-board" onClick={openMenu}>+Create new board</Link>

            {boards && boards.map(board => <BoardPreiview key={board._id} board={board} />)}
        </ul>
    )
}
