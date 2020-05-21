import React, { Component } from 'react'
import { BoardsList } from '../cmps/BoardsList.jsx';


export class Boards extends Component {
    render() {
        return (
            <div className="list-container">
               <BoardsList />
            </div>
        )
    }
}
