import React from 'react';
import { FaTimes } from "react-icons/fa";
import { ClickAway } from '../ClickAway';

export function ListMenu(props) {
    const { closeMenu, onListRemove, side} = props;
    const direction={};
    direction[side]=0;
    return (
        <>
            <ClickAway className="invisible" onClick={closeMenu} />
            <div style={direction}className="list-menu flex column" onBlur={closeMenu}>
                <div className="list-menu-title flex space-between">
                    <span>List Actions</span>
                    <span className="close-btn" onClick={closeMenu}><FaTimes /></span>
                </div>
                <ul className="list-menu-bodu flex column" >
                    <li >Add Card...</li>
                    <li>Copy List...</li>
                    <li>Move List...</li>
                    <li>Watch</li>
                    <li className="list-footer">Archive</li>
                    <li onClick={onListRemove} className="list-remove">Delete</li>
                </ul>
            </div>
        </>
        // </ClickAway>
    )
}
