import React from 'react';
import { CardPreiview } from './CardPreiview.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd'

export function ListPreiview(props) {
    const { list } = props
    return (
        <Draggable draggableId={list.id} index={props.index}>
            {(provided) => (
                <section className="list"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="list-title" {...provided.dragHandleProps}>
                        {list.title}
                    </div>
                    <Droppable droppableId={list.id} type="task">
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
            )}
        </Draggable>
    )
}
