import React from 'react'
import image from '../../assets/imgs/Logo.png'
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
=======
>>>>>>> f50abd4d00af843af5ca6fe2ffe1a46b7a27effc
import { FaTh, FaColumns, FaPlus, FaWeightHanging, FaUserCircle, FaInfo, FaHome, FaSistrix } from "react-icons/fa";
export function BoardNav(props) {

    return (
        <nav className="board-nav flex space-between align-center justify-center">
<<<<<<< HEAD
            <ul className="main-links flex space-even">
=======
            <ul className="main-links left-links flex space-even">
>>>>>>> f50abd4d00af843af5ca6fe2ffe1a46b7a27effc
                <li><FaTh /></li>
                <li><FaHome /></li>
                <li><FaColumns /></li>
                <input type="text" name="search" placeholder="Search.." />
            </ul>
            <div className="logo">
                <img src={image} alt="" />

            </div>
<<<<<<< HEAD
            <ul className="main-links flex space-even">
=======
            <ul className="main-links right-links flex space-even">
>>>>>>> f50abd4d00af843af5ca6fe2ffe1a46b7a27effc
                <li><FaWeightHanging /></li>
                <li><FaPlus /></li>
                <li><FaInfo /></li>
                <li><FaUserCircle /></li>
            </ul>

        </nav>)
}

