import React, { Component } from 'react';
import { NavBar } from '../cmps/NavBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, login } from '../store/actions/userActions';


class _Homepage extends Component {
    componentDidUpdate() {
        !this.props.user && console.log(this.props.user)
    }
    render() {
        const { user, logout, login } = this.props;
        return (
            <div className="homepage">
                <header className="homepage-head">
                    <NavBar user={user} logout={logout} login={login} />
                    <div className="main-img">
                        <img src={require('../assets/imgs/home2.png')} alt="" />
                  </div>
                                 <div className="footer-txt flex column">
                        <p>Start Planning Today Sign up and become one of the millions of people around the world using Trello to get more done.</p>
                        <Link to={`/${user && user.username ? user.username : 'guest'}/boards`} className="home-btn" >Start Now, It's Free</Link>
                    </div>
                </header>
                <main className="homepage-body">
                 
                </main>

                {/* <footer className="footer-container flex align-center justify-center">
                    <div className="footer-img">
                        <img src={require('../assets/imgs/footer1.png')} alt="" />
                    </div>
                    <div className="footer-txt">
                        <p>Start Planning Today Sign up and become one of the millions of people around the world using Trello to get more done.</p>
                        <Link to={`/${user && user.username ? user.username : 'guest'}/boards`} className="home-btn" >Start Now, It's Free</Link>
                    </div>

                    <div className="footer-img">
                        <img src={require('../assets/imgs/footer2.png')} alt="" />
                    </div>
                </footer> */}
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    logout,
    login
}

export const Homepage = connect(mapStateToProps, mapDispatchToProps)(_Homepage)