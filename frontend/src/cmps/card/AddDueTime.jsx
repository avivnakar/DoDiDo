import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';

export class AddDueTime extends Component {
    state = {
        date: new Date(),
    }
    onChange = (date) => {
        this.setState({ date })
    }
    setDue = () => {
        const { card, board, updateBoard } = this.props
        const DATE = this.state.date.getTime()
        card.dueDate = DATE
        updateBoard(board)
        this.props.clearAddTo()
    }
    render() {
        return (
            <div>
                <DateTimePicker
                    onChange={this.onChange}
                    value={this.state.date}
                    autoFocus={true}
                    disableClock={true}
                    format={'dd/MM/y'}
                />
                <button onClick={this.setDue}>Save</button>
            </div>
        );
    }
}
