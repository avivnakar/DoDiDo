import React, { Component } from 'react';
import { NavBar } from '../cmps/NavBar';
import { Link } from 'react-router-dom';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <header className="homepage-head">
                    <NavBar />
                    <section className="flex justify-center align-center">
                        <div className="desc">
                            <h2>DoDiDo lets you work more collaboratively and get more done.</h2>
                            <p>DoDiDo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
                            <Link to="/:username/boards" className="home-btn" >Try DoDiDo Now</Link>
                        </div>
                        <img src={require('../assets/imgs/home2.png')} alt="" />
                    </section>
                </header>
                <main>
                    <div className="frs-para flex space-even align-center">
                        <img src={require('../assets/imgs/home3.png')} alt="" />
                        <div className="txt-para">
                            <h1>Work with any team</h1>
                            <p>Whether it’s for work, a side project or even the next family vacation, DoDiDo helps your team stay organized.</p>
                            <div className="start-emil">
                                <input type="text" placeholder="Email" />
                                <button className="home-btn">Start doing</button>
                            </div>
                        </div>
                    </div>
                    <div className="sec-para flex column space-even align-center">
                        <div className="sec-para-txt flex align-center justify-center">
                            <div className="sec-head">Why DoDiDo ?</div>
                        </div>
                        <div className="desc flex space-even">
                            <div className="desc1">
                                <img src={require('../assets/imgs/done.png')} alt="" />
                                <h2>1)Make it yours.</h2>
                                <p>Make it feel like home for you and your team. Customize the board's appearance, Organize your lists to fit the team's flow.</p>
                            </div>
                            <div className="desc2">
                                <img src={require('../assets/imgs/done.png')} alt="" />
                                <h2>2)Drag {'&'} Drop!</h2>
                                <p>Try our Drag n Drop technology to easily move and update your tasks with your mouse or finger.</p>

                            </div>
                            <div className="desc3">
                                <img src={require('../assets/imgs/done.png')} alt="" />
                                <h2>3)Web Sockets</h2>
                                <p>With the power of web sockets, you and your team can enjoy a workspace that updates in real-time, keeping everyone synced and up to date.</p>
                            </div>
                        </div>
                    </div>
                    <div className="trh-para">
                        <img src={require('../assets/imgs/task.png')} alt="" />
                        <div className="main-trh-para">
                            <h1>Lets Take A Look</h1>
                            <img src={require('../assets/imgs/board.jpg')} alt="" />
                        </div>
                    </div>
                </main>

                <footer className="footer-container flex align-center justify-center">
                    <div className="footer-img">
                        <img src={require('../assets/imgs/footer1.png')} alt="" />
                    </div>
                    <div className="footer-txt">
                        <p>Start Planning Today Sign up and become one of the millions of people around the world using Trello to get more done.</p>
                        <Link to="/:username/boards" className="home-btn" >Start Now, It's Free</Link>
                    </div>

                    <div className="footer-img">
                        <img src={require('../assets/imgs/footer2.png')} alt="" />
                    </div>
                </footer>
            </div >
        )
    }
}