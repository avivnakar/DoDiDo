import React from 'react';
import { FaPencilAlt, FaUserFriends, FaArrowRight, FaClone, FaHistory, FaTrashRestoreAlt } from "react-icons/fa";
import { ClickAway } from '../ClickAway';

export function CardMenu(props) {
    const stop = ev => {
        ev.stopPropagation();
        ev.preventDefault();
    }
    return (
        // <ClickAway onClick={stop} >
            <ul className="card-menu flex column" hidden={props.hidden}>
                <li ><FaPencilAlt /> Edit Card</li>
                <li ><FaUserFriends /> Change Members</li>
                <li ><FaArrowRight /> Move</li>
                <li ><FaClone /> Copy</li>
                <li ><FaHistory /> Change Due Time</li>
                <li ><FaTrashRestoreAlt /> Archive</li>
            </ul>
        // </ClickAway>

    )
}