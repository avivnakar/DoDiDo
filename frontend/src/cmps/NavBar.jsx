import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar(props) {
    const { user,logout,login } = props
    return (
        <nav className="nav-container">
            <div className="logo">
                <img src={require('../assets/imgs/Logo.png')} alt="" />
            </div>
            <div className="pages">
                <ul>
                    {user &&<>
                        <li><img src={user.imgUrl} alt={user.username}/></li>
                        <li>Hi {user.fullName}</li>
                    </>}
                    <li className="login" onClick={user?logout:login} >{user ? 'Logout' : 'Login'}</li>
                    {!user && <Link to="/signup"><li className="sign-up">Sign Up</li></Link>}
                </ul>
            </div>
        </nav>
    )
}
