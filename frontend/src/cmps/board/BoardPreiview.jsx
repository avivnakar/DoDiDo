import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export function BoardPreiview(props) {
    return (
        <Link to={`/b/${props.board.board._id}/${props.board.board.name}`}>
            <li className="board-prev" style={`backgroundImage: 'url(${props.board.background})'`}>
                <h3>{props.board.name}</h3>
            </li>
        </Link>
    )
}
