import React, { Component } from 'react'
import { FaRegClock } from "react-icons/fa";
export class Due extends Component {
    getMonthName(month) {
        switch (month) {
            case 1:
                return 'Jan'
            case 2:
                return 'Feb'
            case 3:
                return 'Mar'
            case 4:
                return 'Apr'
            case 5:
                return 'May'
            case 6:
                return 'Jun'
            case 7:
                return 'Jul'
            case 8:
                return 'Aug'
            case '9':
                return 'Sep'
            case 10:
                return 'Oct'
            case 11:
                return 'Nov'
            case 12:
                return 'Dec'
        }
    }
    getDueTime = () => {
        const { dueDate } = this.props
        const DATE = new Date(dueDate)
        var day = DATE.getDate()
        if (day < 10) day = '0' + day
        var month = DATE.getMonth()
        month = this.getMonthName(month)
        const print = month + ' ' + day
        return print
    }
    getStyle() {
        const { dueDate } = this.props
        const now = new Date()
        const due = new Date(dueDate)
        if (due.getFullYear() - now.getFullYear() < 0) return { backgroundColor: 'red' }
        else {
            if (due.getFullYear() - now.getFullYear() === 0) {
                if (due.getMonth() - now.getMonth() < 0) return { backgroundColor: 'red' }
                else {
                    if (due.getMonth() - now.getMonth() === 0) {
                        if (due.getDate() - now.getDate() < 1) return { backgroundColor: 'red' }
                        else {
                            if (due.getDate() - now.getDate() < 5) return { backgroundColor: 'yellow' }
                            else return { backgroundColor: 'transpert' }
                        }
                    }
                    else return { backgroundColor: 'transpert' }
                }
            }
            else return { backgroundColor: 'transpert' }
        }
    }
    render() {
        return (
            <span style={this.getStyle()}>
                {<FaRegClock />}{this.getDueTime()}
            </span>
        )
    }
}

