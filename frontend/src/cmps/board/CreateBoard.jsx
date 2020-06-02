import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUniversalAccess } from 'react-icons/fa';
export function CreateBoard(props) {
    var title = 'New Board'
    var img = null
    function wrtieTitle(ev) {
        if (ev.target.value) title = ev.target.value
    }
    function changeBg(ev) {
        const x = ev.target.getAttribute('data-img');
        img = x
    }
    function saveBoard() {
        props.toggleBoardMenu()
        const board = {
            _id: makeId(),
            name: title,
            desc: "",
            background: img,
            createdBy: {
                _id: "u101",
                fullName: "Gal Rondel",
                imgUrl: "././img/troll.jpg"
            },
            labels: [],
            members: [],
            activities: [],
            cardLists: []
        }
        props.addBoard(board)

    }
    function makeId(length = 4) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0;i < length;i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
    return (
        <section>
            <div className="create-board flex column">
                <input type="text" placeholder="Add board title" onChange={(ev) => wrtieTitle(ev)} />
                <div className="bgimg flex column">
                    <div className="board-menu-title sub-title">Photos</div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/100.jpg')} data-img="100.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/99.jpg')} data-img="99.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/98.jpg')} data-img="98.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/97.jpg')} data-img="97.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/96.jpg')} data-img="96.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/95.jpg')} data-img="95.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/94.jpg')} data-img="94.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/93.jpg')} data-img="93.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/92.jpg')} data-img="92.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/91.jpg')} data-img="91.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/90.jpg')} data-img="90.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/89.png')} data-img="89.png" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/88.jpg')} data-img="88.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/87.png')} data-img="87.png" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/86.jpg')} data-img="86.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/84.png')} data-img="84.png" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={require('../../assets/imgs/83.jpg')} data-img="83.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                        <img src={require('../../assets/imgs/82.jpg')} data-img="82.jpg" onClick={(ev) => changeBg(ev)} alt="" />
                    </div>
                </div>
                <button className="create-board-menu" onClick={saveBoard}>save</button>
            </div>
        </section>
    )
}
