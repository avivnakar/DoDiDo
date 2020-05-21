import React, { Component } from 'react'
import { BoardPreiview } from './BoardPreiview.jsx';

export function BoardsList(props) {
    const { boards } = props;
    return (
        <ul className="board-list flex space-even">
            {boards && boards.map(board => <BoardPreiview key={board._id} board={board} />)}
        </ul>
    )
}
