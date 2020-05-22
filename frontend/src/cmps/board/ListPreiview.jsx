import React from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { Droppable } from 'react-beautiful-dnd'

export function ListPreiview(props) {
    const { list } = props
    return (
        <section className="list">
            <div className="list-title">{list.title}</div>
            <Droppable droppableId={list.id}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {list.cards && list.cards.map((card, index) => <CardPreiview index={index} key={card.id} card={card} getCurrCard={props.getCurrCard} />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <div className="add-card-btn">
                <button>+ Add Card</button>
            </div>
        </section>
    )
}
