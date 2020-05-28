import React, { Component } from 'react';
import { connect } from 'react-redux';
import {/*  logout, login, */ signup } from '../store/actions/userActions';

class _Signup extends Component {
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
    render() {
        const { toggleShow } = this
        const { isShown } = this.state;
        return <section>
            <form method="post">
                <ul>
                    <li><fieldset>
                        <legend>Enter Your Full Name:</legend>
                        <input type="text" name="fullName" placeholder="Full Name" required />
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Username:</legend>
                        <input type="text" name="username" placeholder="Username" required />
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Password:</legend>
                        <input type="checkbox" onChange={toggleShow} checked={isShown} name="isShown" id="" />
                        {<input type={isShown ? 'text' : 'password'} name="password" placeholder="Password" required />}
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Phone number:</legend>
                        <input type="tel" name="phone" placeholder="Whatsapp number" />
                        <span>* optional feild for whatsapp</span>
                    </fieldset></li>
                </ul>
            </form>
        </section>
    }

}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    signup
}

export const Signup = connect(mapStateToProps, mapDispatchToProps)(_Signup)