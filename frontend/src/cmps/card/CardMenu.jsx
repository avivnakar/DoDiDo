import React from 'react';
import { FaPencilAlt, FaUserFriends, FaArrowRight, FaClone, FaHistory, FaTrashRestoreAlt, FaTrashAlt } from "react-icons/fa";

export function CardMenu(props) {
    const { onCardRemove } = props
    return (
        <ul {...props} className={`card-menu flex column${props.className ? ` ${props.className}` : ''}`} hidden={props.hidden}>
            <li ><FaPencilAlt /> Edit Card</li>
            <li ><FaUserFriends /> Change Members</li>
            <li ><FaArrowRight /> Move</li>
            <li ><FaClone /> Copy</li>
            <li ><FaHistory /> Change Due Time</li>
            <li ><FaTrashRestoreAlt /> Archive</li>
            <li onClick={onCardRemove} ><FaTrashAlt style={{ pointerEvents: 'none' }} /> Delete</li>
        </ul>
    )
}