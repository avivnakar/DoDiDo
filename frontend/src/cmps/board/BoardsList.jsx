import React, { Component } from 'react'
import { BoardPreiview } from './BoardPreiview.jsx';

export function BoardsList(props) {
        return (
            <ul>
                {props.boards.map(board => <BoardPreiview key={board._id} board={board}/>)}
            </ul>
        )
}
