import React, { Component } from 'react';
import { connect } from 'react-redux';
import {/*  logout,signup , */login } from '../store/actions/userActions';

class _LoginModal extends Component {
    state = {
        isShown: false
    }
    componentDidUpdate() {
        !this.props.user && console.log(this.props.user)
    }
    toggleShow = (ev) => {
        const isShown = ev.target.checked
        this.setState({ isShown });
    }
    onLogin = (ev) => {
        const credentials = {
            username: ev.target.username.value,
            password: ev.target.password.value
        }
        ev.preventDefault();
        ev.stopPropagation();
        this.props.login(credentials)
    }
    render() {
        const { toggleShow, onLogin } = this
        const { isShown } = this.state;

        return <section>
            <form method="post" onSubmit={onLogin}>
                <ul>
                    <li><fieldset>
                        <legend>Username:</legend>
                        <input type="text" name="username" placeholder="Username" required />
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Password:</legend>
                        <input type="checkbox" onChange={toggleShow} checked={isShown} name="isShown" id="" />
                        {<input type={isShown ? 'text' : 'password'} name="password" placeholder="Password" required />}
                    </fieldset></li>
                </ul>
                <input type="submit" hidden />
            </form>
        </section>
    }

}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    login
}

export const LoginModal = connect(mapStateToProps, mapDispatchToProps)(_LoginModal)