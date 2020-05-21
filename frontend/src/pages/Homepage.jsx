import React, { Component } from 'react';
import { NavBar } from '../cmps/NavBar';
import {Link } from 'react-router-dom';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavBar />
                    <section className="flex justify-center align-center">
                        <div className="desc">
                            <h2>DoDiDo lets you work more collaboratively and get more done.</h2>
                            <p>DoDiDo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
                            <Link to="/:username/boards" className="startBtn" >Start Now, It's Free</Link>
                        </div>
                        <img src={require('../assets/imgs/h1.png')} alt="" />
                    </section>
                </header>
                <main>
                    <div className="frs-para flex space-even align-center">
                        <img src={require('../assets/imgs/1.png')} alt="" />
                        <div className="txt-para">
                            <h1>Work with any team</h1>
                            <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                            <div className="start-emil">
                                <input type="text" placeholder="Email" />
                                <button className="startBtn">Start doing</button>
                            </div>
                        </div>
                    </div>
                    <div className="frs-para flex space-even align-center">
                        <div className="txt-para">
                            <h1>Work with any team</h1>
                            <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                            <div className="start-emil">
                                <input type="text" placeholder="Email" />
                                <button className="startBtn">Start doing</button>
                            </div>
                        </div>
                        <img src={require('../assets/imgs/1.png')} alt="" />
                    </div>
                    <div className="frs-para flex space-even align-center">
                        <img src={require('../assets/imgs/1.png')} alt="" />
                        <div className="txt-para">
                            <h1>Work with any team</h1>
                            <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                            <div className="start-emil">
                                <input type="text" placeholder="Email" />
                                <button className="startBtn">Start doing</button>
                            </div>
                        </div>
                    </div>
                    <div className="sec-para">
                        <div className="sec-para-head flex justify-center align-center">
                            <h1>Why DoDiDo</h1>
                            <img src={require('../assets/imgs/h2.png')} alt="" />
                        </div>

                        <section className="sec-para-txt flex space-even align-center">
                            {/* <img src={require('../assets/imgs/h2.png')} alt="" /> */}
                            <div className="desc">
                                <h2>1) all you need to do is</h2>
                                <p>DoDiDo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
                            </div>
                            <div className="desc">
                                <h2>2) next step is ....</h2>
                                <p>DoDiDo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
                            </div>
                            <div className="desc">
                                <h2>3) its so simple !!!</h2>
                                <p>DoDiDo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
                            </div>
                        </section>
                    </div>

                </main>
                <footer>
                    <img src={require('../assets/imgs/Logo.png')} alt="" />

                </footer>
            </div >
        )
    }
}