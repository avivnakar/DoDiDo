import React from 'react'

export function NavBar(props) {
    const { user } = props
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
                    <li className="login">{user ? 'Logout' : 'Login'}</li>
                    {!user && <li className="sign-up">Sign Up</li>}
                </ul>
            </div>
        </nav>
    )
}
