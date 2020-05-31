import React from 'react';
import { FaTimes } from "react-icons/fa";
import { ClickAway } from '../ClickAway';

export function BoardMenu(props) {
    const { closeMenu, onListRemove } = props;
    return (
        <>
            <ClickAway className="invisible" onClick={closeMenu} />
            <div className="list-menu flex column" onBlur={closeMenu}>
                <div className="list-menu-title flex space-between">
                    <span>Board Actions</span>
                    <span className="close-btn" onClick={closeMenu}><FaTimes /></span>
                </div>
                <ul className="list-menu-bodu flex column" >
                    <li>Background Image</li>
                    <li>Background Color</li>
                    <li onClick={onListRemove} className="list-remove">Remove Board</li>
                    <li className="list-footer">Save</li>
                </ul>
            </div>
            {/* <ClickAway /> */}
        </>
    )
}