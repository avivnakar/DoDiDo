import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../store/actions/userActions";

class _Profile extends Component {
    componentDidUpdate() {

    }
    getPassword(){
        const { user } = this.props
        var text =''
        for(var i=0;i<user.password.length;i++){
            text += '*'
        }
        return text
    }
    render() {
        const { user } = this.props
        return <section className="profile">
            <h2>Hello {user.fullName}</h2>
            <div style={{height:150,width:150,border: '.3px solid',borderRadius: '100%',backgroundColor: '#dfe3ec'}}>
                <img src={user.imgUrl} alt={user.usermame}/>
            </div>
            <div>
                User Name
                <div>{user.username}</div>
            </div>
            {/* <div>
                Password
                <div>{this.getPassword()}</div>
            </div> */}
            <div>
                Phone
                <div>{user.phone}</div>
            </div>
        </section>

    }
}
const mapStateToProps = (state) => {
    console.log(state.user.user);

    return {
        user: state.user.user
    }
}
const mapDispatchToProps = {
    updateUser
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile)