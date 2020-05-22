import React from 'react'
import image from '../../assets/imgs/Logo.png'
import { FaTh, FaColumns, FaPlus, FaWeightHanging, FaUserCircle, FaInfo, FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export function BoardNav(props) {

    return (
        <nav className="board-nav flex space-between align-center justify-center">
            <ul className="main-links left-links flex space-even">
                <li><FaTh /></li>
                <li><NavLink exact to="/"><FaHome/></NavLink></li>
                <li><FaColumns /></li>
                <input type="text" name="search" placeholder="Search.." />
            </ul>
            <div className="logo">
                <img src={image} alt="" />

            </div>
            <ul className="main-links right-links flex space-even">
                <li><FaWeightHanging /></li>
                <li><FaPlus /></li>
                <li><FaInfo /></li>
                <li><FaUserCircle /></li>
            </ul>

        </nav>)
}

