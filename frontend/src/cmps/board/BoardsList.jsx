import React, { Component } from 'react'
import { BoardPreiview } from './BoardPreiview.jsx';

<<<<<<< HEAD
export class BoardsList extends Component {
    render() {
=======
export function BoardsList(props) {
    const {boards} = props;
>>>>>>> 60ea8b5593b0c662523ede98c2618fe3625054d7
        return (
            <ul>
                {boards&&boards.map(board => <BoardPreiview key={board._id} board={board}/>)}
            </ul>
        )
}
