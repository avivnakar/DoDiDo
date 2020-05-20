import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export function BoardPreiview(props) {
    const {board} = props;
    return (
        <Link to={`/b/${board._id}/${board.name}`}>
            <li className="board-prev" style={{backgroundImage: 'url(${props.board.background})'}}>
                <h3>{board.name}</h3>
            </li>
        </Link>
    )
}
