import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../store/actions/userActions";

class _Profile extends Component {
    componentDidUpdate(){

    }
    render() {
        const { user} = this.props
        return <section className="profile">
            <img src={`https://robohash.org/set_set3/${user.username}`} alt="" />
            <pre>{JSON.stringify(user, null, 2).split('"').join('')}</pre>
        </section>

    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}
const mapDispatchToProps = {
    updateUser
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile)