import React from 'react';
// import { FaTimes } from "react-icons/fa";
// import { ClickAway } from '../ClickAway';
import { CirclePicker } from 'react-color';

export function BoardMenu(props) {
    const { board, updateBoard } = props;


    function changeBg(ev) {
        const x = ev.target.getAttribute('data-img');
        board.background = x
        updateBoard(board)
        props.toggleBoardMenu()
        props.setActivites({ fullName: 'Guest' }, {name: 'Change',item: 'Board background', dest: board.background})

    }
    toggleBg = () => {
        this.setState(prevState => ({ isBg: !prevState.isBg }))
    }
    render() {
        const { board, updateBoard } = this.props;
        return (
            <div className="board-menu-list flex column">
                <Link to="#" className="board-sec-nav-icons" onClick={this.toggleBg}>Change background</Link>
                {this.state.isBg && <ChangeBg board={board} updateBoard={updateBoard} toggleBoardMenu={this.props.toggleBoardMenu} />}
                {board.activities.length > 0 && board.activities.map((activity) => <Activities key={activity.id} activity={activity} />)}
            </div>
        )
    }
}