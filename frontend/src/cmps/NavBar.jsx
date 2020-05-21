import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <nav className="nav-container">
                <div className="logo">
                    <img src={require('../assets/imgs/Logo.png')} alt="" />
                </div>
                <div className="pages">
                    <ul>
                        <li className="login">Login</li>
                        <li className="sign-up">Sign Up</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
