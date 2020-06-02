import React, { Component } from 'react'
import { ChangeBg } from './ChangeBg.jsx'
import { Activities } from './Activities.jsx'
import { Link } from 'react-router-dom';
export class BoardMenu extends Component {
    state = {
        isBg: false
    }
    toggleBg = () => {
        this.setState(prevState => ({ isBg: !prevState.isBg }))
    }
    render() {
        const { board, updateBoard } = this.props;
        return (
            <div className="board-menu-list flex column">
                {this.state.isBg && <ChangeBg setActivites={this.props.setActivites} board={board} updateBoard={updateBoard} toggleBoardMenu={this.props.toggleBoardMenu} />}
                {!this.state.isBg && <h4 className="board-menu-title">Activities</h4>}
                <div className="activi-container">
                    {board.activities.length > 0 && !this.state.isBg &&
                        board.activities.map((activity) => <Activities key={activity.id} activity={activity} />)
                    }
                </div>
                <Link to="#" className="add-list-btn" onClick={this.toggleBg}>Change background</Link>
            </div>
        )
    }
}
