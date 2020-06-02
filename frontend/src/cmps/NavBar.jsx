import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginModal } from './LoginModal'

export function NavBar(props) {
    const { user, logout, login } = props
    var [modalIsOpen, toggleModal] = useState(false)
    return (
        <nav className="nav-container flex">
            <div className="logo">
                <img src={require('../assets/imgs/Logo.png')} alt="" />
            </div>
            <div className="pages">
                <ul className="flex space-between">
                    {user ? <>
                        <li><img src={user.imgUrl} alt={user.username} /></li>
                        <li>Hi {user.fullName}</li>
                    </> : modalIsOpen ? <LoginModal /> : ''}
                    <li className="login" onClick={user ? logout : ()=>toggleModal(!modalIsOpen)} >{user ? 'Logout' : 'Login'}</li>
                    {!user && <Link to="/signup"><li className="sign-up">Sign Up</li></Link>}
                </ul>
            </div>
        </nav>
    )
}
