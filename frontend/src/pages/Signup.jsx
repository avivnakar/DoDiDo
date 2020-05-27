import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, login, signup } from '../store/actions/userActions';

class _Signup extends Component {

    componentDidUpdate() {
        !this.props.user && console.log(this.props.user)
    }
    render() {
        return <section>
            <form method="post">
                <ul>
                    <li><fieldset>
                        <legend>Enter Your Full Name:</legend>
                        <input type="text" name="fullName" placeholder="Full Name" required />
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Enter Your Full Name:</legend>
                        <input type="password" name="username" placeholder="Username" required />
                    </fieldset></li>
                    <li><fieldset>
                        <legend>Password:</legend>
                        <input type="password" name="password" placeholder="Password" required />
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