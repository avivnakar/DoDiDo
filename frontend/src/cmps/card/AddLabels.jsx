import React, { Component } from 'react'
import { AddLabelBoard } from '../board/AddLabelBoard.jsx';
import { LabelList } from '../board/LabelList.jsx';

export class AddLabels extends Component {
    state = {
        isOpen: false
    }
    toggleAdd = () => {
        this.setState(prevState =>({ isOpen: !prevState.isOpen }))
    }
    addLabel = (labelId) => {
        const { board, cardLabels } = this.props
        var label = board.labels.find(label => label.id === labelId)
        var idxLabel = cardLabels.findIndex(cardLabel => cardLabel.id === labelId)
        if (idxLabel !== -1) {
            cardLabels.splice(idxLabel, 1)
        } else cardLabels.push(label)
        this.props.updateBoard(board)
        this.props.clearAddTo()
    }
    render() {
        const { board, updateBoard, cardLabels } = this.props
        if (false) {//just for cleaning console
            updateBoard()
            cardLabels()
        }
        return (
            <div className="add-labels">
            <div className="lab-container flex space-between">
            <div className="labels-title">Labels</div>
                <LabelList labels={board.labels} command={this.addLabel} /><button className="add-member-btn" onClick={this.toggleAdd}>+Add Label</button>
            </div>
                {this.state.isOpen && <AddLabelBoard board={board} updateBoard={updateBoard} />}
            </div>
        )
    }
}
