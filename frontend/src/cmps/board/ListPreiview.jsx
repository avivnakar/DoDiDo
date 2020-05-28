import React, { useState } from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { ListTitle } from './ListTitle.jsx';
import { AddCard } from './AddCard.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { FaEllipsisH } from "react-icons/fa";
import { Link } from 'react-router-dom';

// import { FaEllipsisH, FaEye } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
import { removeCard } from '../../store/actions/boardActions.js';
// import { removeList, removeCard } from '../../store/actions/boardActions.js';
import { connect } from 'react-redux'
import { ListMenu } from './ListMenu.jsx';

function _ListPreiview(props) {
    var [isMenuOpened, setMenuOpened] = useState(false)
    var [isLeft, setDirection] = useState(false)
    var [isAddingCard, toggleAddCard] = useState(false)
    const { list, board, updateBoard, removeCard } = props
    const onCardRemove = (cardId) => (ev) => {
        ev.stopPropagation();
        removeCard(board, list, cardId)
    }
    const onListRemove = (ev) => {
        const idx = board.cardLists.findIndex(l => l.id === list.id);
        board.cardLists.splice(idx, 1);
        updateBoard(board);
        onCloseMenu(ev);
    }
    const onOpenMenu = (ev) => {
        const direction=(window.innerWidth-ev.clientX > 300 )
        setDirection(direction)
        props.setOnClickAway(onCloseMenu)
        setMenuOpened(true);
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
        props.setOnClickAway(null);
        setDirection(false);
        setMenuOpened(false);
    }

    return (
        <Draggable draggableId={list.id} index={props.index}>
            {(provided) => (
                <div className="list-warpper">
                    <section className="list"
                        {...!isMenuOpened ? (provided.draggableProps) : {}}
                        ref={provided.innerRef}
                    >

                        <div className="list-title flex space-between justify-center align-center"
                            {...provided.dragHandleProps}>
                            <ListTitle updateBoard={updateBoard} list={list} board={board} />
                            <div className="list-menu-btn" onClick={onOpenMenu}>
                                <Link to="#" style={{ content: "pop" }}><FaEllipsisH style={{ pointerEvents: 'none' }} /></Link>
                                {isMenuOpened && <ListMenu side={isLeft?'left':'right'} closeMenu={onCloseMenu} onListRemove={onListRemove} />}
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
                                            index={index} key={card.id} card={card} getCurrCard={props.getCurrCard}
                                            onCardRemove={onCardRemove} history={props.history} setOnClickAway={props.setOnClickAway}
                                        />)}
                                    </div>
                                    {provided.placeholder}
                                    <AddCard updateBoard={updateBoard} list={list} board={board} />
                                </div>
                            )}
                        </Droppable>
                    </section>
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

// onMouseOver={(ev=>{
//     isHover=true;
//     console.log(isHover);
// })}
// onMouseLeave={(ev=>{
//     isHover=false;
//     console.log(isHover);
// })}