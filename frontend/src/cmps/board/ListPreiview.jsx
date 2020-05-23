import React from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { ListTitle } from './ListTitle.jsx';
import { AddCard } from './AddCard.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { FaEllipsisH, FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export function ListPreiview(props) {
    const { list, board, updateBoard } = props
    return (
        <Draggable draggableId={list.id} index={props.index}>
            {(provided) => (
                <section className="list"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="list-title flex space-between justify-center align-center" {...provided.dragHandleProps}>
                        <ListTitle updateBoard={updateBoard} list={list} board={board} />
                        <a><FaEllipsisH /></a>
                    </div>
                    <Droppable droppableId={list.id} type="task">
                        {(provided) => (
                            <div className="list-bg"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {list.cards && list.cards.map((card, index) => <CardPreiview index={index} key={card.id} card={card} getCurrCard={props.getCurrCard} />)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <AddCard updateBoard={updateBoard} list={list} board={board}/>
                </section>
            )}
        </Draggable>
    )
}
