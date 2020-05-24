import React from 'react';
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

function _ListPreiview(props) {
    const { list, board, updateBoard, removeCard } = props
    const onCardRemove = (cardId) => (ev) => {
        ev.stopPropagation();
        removeCard(board, list, cardId)
    }
    const onListRemove = (ev) => {
        const idx = board.cardLists.findIndex(l => l.in = list.id);
        board.cardLists.splice(idx, 1);
        updateBoard(board);
    }
    return (
        <Draggable draggableId={list.id} index={props.index}>
            {(provided) => (
                <section className="list"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >

                    <div className="list-title flex space-between justify-center align-center"
                        {...provided.dragHandleProps}>
                        <ListTitle updateBoard={updateBoard} list={list} board={board} />
                        <button className="del" onClick={onListRemove}>⨯</button>
                        <Link to="#"><FaEllipsisH /></Link>
                    </div>
                    <Droppable droppableId={list.id} type="task">
                        {(provided) => (
                            <div className="list-bg"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {list.cards && list.cards.map((card, index) => <CardPreiview
                                    index={index} key={card.id} card={card} getCurrCard={props.getCurrCard}
                                    onCardRemove={onCardRemove} history={props.history} />)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <AddCard updateBoard={updateBoard} list={list} board={board} />
                </section>
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
