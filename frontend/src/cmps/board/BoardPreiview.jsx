import React from 'react';
import { Link } from 'react-router-dom';

export function BoardPreiview(props) {
    const { board } = props;
    var bg = require('../../assets/imgs/' + board.background.toString())
    var styleLi = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <Link to={`/b/${board._id}/${board.name}`}>
            <li className="board-prev" style={styleLi}>
                <h3>{board.name}</h3>
            </li>
        </Link>
    )
}
