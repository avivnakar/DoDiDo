import React from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { Droppable } from 'react-beautiful-dnd'
import { FaEllipsisH, FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export function ListPreiview(props) {
    const { list } = props
    return (
        <section className="list">
            <div className="list-title flex space-between justify-center align-center ">
                <span>{list.title}</span>
                <a><FaEllipsisH /></a>
            </div>

            <Droppable droppableId={list.id} >
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
            <div className="add-card-container">
                <a className="add-card-btn"><span><FaPlus /></span>Add Card</a>
            </div>
        </section >
    )
}
