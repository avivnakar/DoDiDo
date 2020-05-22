import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { FaEye, FaRegCheckSquare, FaUserCircle, FaRegClock } from "react-icons/fa";

export function CardPreiview(props) {
    const { card } = props
    return (
        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (
                //    <Link to={`/c/${card.id}/${card.title}`}>
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
                //   </Link>
            )}
        </Draggable>
    )
}
