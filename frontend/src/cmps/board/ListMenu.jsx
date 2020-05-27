import React from 'react';
import { FaTimes } from "react-icons/fa";

export function ListMenu(props) {

    return (
        <div className="list-menu flex column">
            <div className="list-menu-title flex space-between">
                <span>List Actions</span>
                <span className="close-btn"><FaTimes /></span>
            </div>
            <ul className="list-menu-bodu flex column">
                <li >Add Card...</li>
                <li>Copy List...</li>
                <li>Move List...</li>
                <li>Watch</li>
                <li className="list-footer">Archive</li>
            </ul>
        </div>
    )
}
