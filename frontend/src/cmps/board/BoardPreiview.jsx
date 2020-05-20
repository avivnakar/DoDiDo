import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export function BoardPreiview(props) {
    const {board} = props;
    var styleLi={
        backgroundImage: `url(${board.background.toString()})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <Link to={`/b/${board._id}/${board.name}`}>
            <li className="board-prev" style ={styleLi}>
                <h3>{board.name}</h3>
            </li>
        </Link>
    )
}
