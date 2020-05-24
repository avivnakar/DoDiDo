import React, { Component } from 'react'
import { LabelList } from '../board/LabelList.jsx';

export class AddLabels extends Component {
    render() {
        const { board, updateboard, cardLabels } = this.props
        return (
            <div>
                Labels
                <LabelList labels={board.labels} /><button>+Add Label</button>
            </div>
        )
    }
}
