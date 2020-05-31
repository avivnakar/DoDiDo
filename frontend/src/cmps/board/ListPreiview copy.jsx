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
    // var [isAddingCard, toggleAddCard] = useState(false)
    const { list, board, updateBoard, removeCard, history, getCurrCard, source, destination } = props
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
        const direction = (window.innerWidth - ev.clientX > 300)
        setDirection(direction)
        setMenuOpened(true);
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
        setDirection(false);
        setMenuOpened(false);
    }
    // console.log(props)
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
                                <ListTitle updateBoard={updateBoard} list={list} board={board} />
                                <div className="list-menu-btn" onClick={onOpenMenu}>
                                    <Link to="#" style={{ content: "pop" }}><FaEllipsisH style={{ pointerEvents: 'none' }} /></Link>
                                    {isMenuOpened && <ListMenu side={isLeft ? 'left' : 'right'} closeMenu={onCloseMenu} onListRemove={onListRemove} />}
                                </div>
                            </div>
                            <Droppable droppableId={list.id} type="task">
                                {(provided) => (
                                    <div className="list-bg"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <div className="list-cards">
                                            {list.cards ? <MapLists cards={list.cards} cardProps={{ history, onCardRemove, getCurrCard }} shadow={provided.placeholder}
                                                source={source} destination={destination}
                                            /> : {} /* provided.placeholder */}
                                            {/* list.cards.map((card, index) => <CardPreiview
                                                index={index} key={card.id} card={card} getCurrCard={props.getCurrCard}
                                                onCardRemove={onCardRemove} history={props.history} */}
                                            {/* />)} */}
                                        </div>
                                        {isShadowLast(source,destination,list.cards) && provided.placeholder}
                                        <AddCard updateBoard={updateBoard} list={list} board={board} />
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

function MapLists(props) {
    const { cards, cardProps, destination, source, shadow } = props
    return cards && cards.map((card, index) => <CardPreiview index={index} key={card.id} card={card} {...cardProps}
    >{(isShadowPlace(source, index,cards.length) || isShadowPlace(destination, index,cards.length)) && shadow}</CardPreiview>)
}
function isShadowPlace(obj, index) {
    return obj && (obj.index === index);
}
function isShadowLast(src,dest,{length}){
return (src&&src.index===length)||(dest&&dest.index===length)||(length===0)||(!src&&!dest)
}
function listBeforeShadow() {
    
}
function listBeforeShadow(src,dest,props) {
    return []
}