import React from 'react';
import { FaTimes } from "react-icons/fa";
import { ClickAway } from '../ClickAway';
import { CirclePicker } from 'react-color';

export function BoardMenu(props) {
    const { board, updateBoard } = props;


    function changeBg(ev) {
        // console.log(ev.target.attributes);
        const x = ev.target.getAttribute('data-img');
        board.background = x
        updateBoard(board)
        props.toggleBoardMenu()
    }
    return (
        <div className="board-menu-list flex column">
            <div className="board-menu-title">Change Background</div>
            <div className="bgimg flex column">
                <div className="board-menu-title sub-title">Photos</div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/100.jpg')} data-img="100.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/99.jpg')} data-img="99.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/98.jpg')} data-img="98.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/97.jpg')} data-img="97.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/96.jpg')} data-img="96.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/95.jpg')} data-img="95.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/94.jpg')} data-img="94.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/93.jpg')} data-img="93.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/92.jpg')} data-img="92.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/91.jpg')} data-img="91.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/90.jpg')} data-img="90.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/89.png')} data-img="pmg.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/88.jpg')} data-img="88.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/87.png')} data-img="87.png" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/86.jpg')} data-img="86.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>
                <div className="img-container">
                    <img src={require('../../assets/imgs/84.png')} data-img="84.png" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/83.jpg')} data-img="83.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    <img src={require('../../assets/imgs/82.jpg')} data-img="82.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                </div>

            </div>
            <div className="bgclr">
                <div className="board-menu-title sub-title">Colors</div>
                <CirclePicker
                // color={this.state.background}
                // onChangeComplete={this.handleChangeComplete}
                />
            </div>

        </div>
    )
}