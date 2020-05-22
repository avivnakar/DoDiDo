import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaEye, FaRegCheckSquare, FaUserCircle, FaRegClock } from "react-icons/fa";

export function CardPreiview(props) {

    const { card } = props
    return (
        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (
                <article className="card" onClick={() => props.getCurrCard(card)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span>{card.title}</span>
                    <div className="card-stat">
                        {card.cardMembers && <span>{card.cardMembers.length}{<FaUserCircle />}</span>}
                        {card.cheklists && <span>{card.cheklists.length}{<FaRegCheckSquare />}</span>}
                        {card.dueDate && <span>{<FaRegClock />}</span>}
                        {card.attachments && <span>{card.attachments.length}{<FaEye />}</span>}
                    </div>
                </article>
            )}
        </Draggable>
    )
}
