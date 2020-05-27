import React from 'react';
import { FaPencilAlt, FaUserFriends, FaArrowRight, FaClone, FaHistory, FaTrashRestoreAlt } from "react-icons/fa";

export function CardMenu(props) {

    return (

        <ul className="card-menu flex column">
            <li ><FaPencilAlt /> Edit Card</li>
            <li ><FaUserFriends /> Change Members</li>
            <li ><FaArrowRight /> Move</li>
            <li ><FaClone /> Copy</li>
            <li ><FaHistory /> Change Due Time</li>
            <li ><FaTrashRestoreAlt /> Archive</li>

        </ul>

    )
}