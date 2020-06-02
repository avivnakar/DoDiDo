import React, { Component } from 'react'
import {ChangeBg} from './ChangeBg.jsx'
import {Activities} from './Activities.jsx'
import { Link } from 'react-router-dom';
export  class BoardMenu extends Component {
    state ={
        isBg: false
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
                {board.activities.length > 0 && !this.state.isBg &&  board.activities.map((activity) => <Activities key={activity.id} activity={activity} />)}
            </div>
        )
    }
}
