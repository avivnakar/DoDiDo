import React, { Component } from 'react'
import { BoardPreiview } from './BoardPreiview.jsx';

export function BoardsList(props) {
    const {boards} = props;
        return (
            <ul>
                <li>ya rabanan there will be a list</li>
                {boards&&boards.map(board => <BoardPreiview key={board._id} board={board}/>)}
            </ul>
        )
}
