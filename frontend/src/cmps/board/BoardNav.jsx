import React from 'react'
import image from '../../assets/imgs/Logo.png'
import { /* FaTh, FaColumns, FaPlus, FaWeightHanging,  */FaUserCircle, /* FaInfo, */ FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../../store/actions/userActions';

function _BoardNav(props) {
    // const { user } = props;
    return props.match.isExact ? '' : (
        <nav className="board-nav flex space-between align-center justify-center">
            <ul className="main-links left-links flex">
                {/* <li><FaTh /></li> */}
                <li><NavLink exact to="/"><FaHome /></NavLink></li>
                {/* <li><NavLink exact to={`/${user && user.username ? user.username : 'guest'}/boards`}><FaColumns /></NavLink></li> */}
                {/* <input type="search" name="q" placeholder="Search.." onChange={e => console.log(e.target)} /> */}
            </ul>
            <div className="logo">
                <img src={image} alt="" />
            </div>
            <ul className="main-links right-links flex space-even">
                {/* <li><FaWeightHanging /></li> */}
                {/* <li><FaPlus /></li> */}
                {/* <li><FaInfo /></li> */}
                <li><NavLink exact to={props.user ? `/${props.user.username}` : '#'}><FaUserCircle /></NavLink></li>
            </ul>

        </nav >)
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}
const mapDispatchToProps = {
    logout
}

export const BoardNav = connect(mapStateToProps, mapDispatchToProps)(_BoardNav)