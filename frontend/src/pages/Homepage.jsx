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
        var bg = require('../assets/imgs/homepage.jpg')
        var styleLi = {
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        const { user, logout, login } = this.props;
        return (
            <div className="homepage" >
                <NavBar user={user} logout={logout} login={login} />
                {/* <Link to={`/${user && user.username ? user.username : 'guest'}/boards`} className="home-btn" >Start Now, It's Free</Link> */}
                <header style={styleLi}>
                    {/* <img src={require('../assets/imgs/homepage.jpg')} alt="" /> */}
                    <div className="header-container flex column">
                        <div className="txt-header">
                            DoDiDo lets you work more collaboratively and get more done.
                        </div>
                        <Link to={`/${user && user.username ? user.username : 'guest'}/boards`} className="home-btn" >Try DoDiDo Now</Link>
                    </div>
                </header>
                <section className="frs-section flex column">
                    <div className="txt-header">
                        See how it works
                    </div>
                    <p>Go from idea to action in seconds with DoDiDo's intuitively simple boards, lists, and cards.</p>
                    <img src={require('../assets/imgs/board.jpg')} alt="" />
                </section>
                <footer className="footer-container flex align-center justify-center">
                    <div className="footer-txt flex align-center justify-center column">
                        <p>Start Planning Today Sign up and become one of the millions of people around the world using DoDiDo to get more done.</p>
                        <Link to={`/${user && user.username ? user.username : 'guest'}/boards`} className="home-btn" >Start Now, It's Free</Link>
                    </div>
<<<<<<< HEAD
                    <div className="footer-img">
                        <img src={require('../assets/imgs/footer2.png')} alt="" />
                    </div>
=======
>>>>>>> origin/master
                </footer>


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