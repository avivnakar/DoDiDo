import React, { useState } from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { ListTitle } from './ListTitle.jsx';
import { AddCard } from './AddCard.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { FaEllipsisH } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { removeCard } from '../../store/actions/boardActions.js';
import { connect } from 'react-redux'
import { ListMenu } from './ListMenu.jsx';

function _ListPreiview(props) {
    var [isMenuOpened, setMenuOpened] = useState(false)
    var [isLeft, setDirection] = useState(false)
    const { list, board, updateBoard, removeCard } = props
    const onCardRemove = (cardId) => (ev) => {
        var card = list.cardLists.find(card => card.id === cardId)
        props.setActivites({ fullName: 'Guest' }, {name: 'Del',item: `card:\"${card.title}\"`})
        ev.stopPropagation();
        removeCard(board, list, cardId)
    }
    const onListRemove = (ev) => {
        const idx = board.cardLists.findIndex(l => l.id === list.id);
        props.setActivites({ fullName: 'Guest' }, {name: 'Del',item: `list:\"${board.cardLists[idx].title}\"`})
        board.cardLists.splice(idx, 1);
        updateBoard(board);
        onCloseMenu(ev);
    }
    const onOpenMenu = (ev) => {
        const direction = (window.innerWidth - ev.clientX > 300)
        setDirection(direction)
        setMenuOpened(true);
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
        setDirection(false);
        setMenuOpened(false);
    }

    return (
        <Draggable draggableId={list.id} index={props.index}>
            {(provided, snapshot) => (
                <div className="list-warpper">
                    <div className="dnd-provider"
                        {...!isMenuOpened ? (provided.draggableProps) : {}}
                        ref={provided.innerRef} >
                        <section className={`list${snapshot.isDragging ? ' tilt' : ''}`}>
                            <div className="list-title flex space-between justify-center align-center"
                                {...provided.dragHandleProps}>
                                <ListTitle updateBoard={updateBoard} list={list} board={board} setActivites={props.setActivites}/>
                                <div className="list-menu-btn" onClick={onOpenMenu}>
                                    <Link to="#" style={{ content: "pop" }}
                                    ><FaEllipsisH style={{ pointerEvents: 'none' }} /></Link>
                                    {isMenuOpened && <ListMenu side={isLeft ? 'left' : 'right'}
                                        closeMenu={onCloseMenu}
                                        onListRemove={onListRemove} />}
                                </div>
                            </div>
                            <Droppable droppableId={list.id} type="task">
                                {(provided) => (
                                    <div className="list-bg"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <div className="list-cards">
                                            {list.cards && list.cards.map((card, index) => <CardPreiview
<<<<<<< HEAD
                                                index={index} key={card.id} card={card} getCurrCard={props.getCurrCard}
                                                onCardRemove={onCardRemove} history={props.history}
                                                setActivites={props.setActivites}
=======
                                                index={index}
                                                key={card.id}
                                                card={card}
                                                getCurrCard={props.getCurrCard}
                                                onCardRemove={onCardRemove}
                                                history={props.history}
>>>>>>> bd79fc43c828133e9226bdf9205717e0ce5eb24b
                                            />)}
                                            {provided.placeholder}
                                        </div>
<<<<<<< HEAD
                                        {provided.placeholder}
                                        <AddCard updateBoard={updateBoard} list={list} board={board}
                                        setActivites={props.setActivites} />
=======
                                        <AddCard updateBoard={updateBoard} list={list} board={board} />
>>>>>>> bd79fc43c828133e9226bdf9205717e0ce5eb24b
                                    </div>
                                )}
                            </Droppable>
                        </section>
                    </div>
                </div>

            )}
        </Draggable>
    )
}

const mapStateToProps = (state) => {
    return {}

}
const mapDispatchToProps = {
    removeCard
}
export const ListPreiview = connect(mapStateToProps, mapDispatchToProps)(_ListPreiview)

