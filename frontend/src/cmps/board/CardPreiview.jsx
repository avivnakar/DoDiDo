import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
export function CardPreiview(props) {

    const { card } = props
    return (
        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (
                <div onClick={() => props.getCurrCard(card)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span>{card.title}</span>
                    <div>
                        {card.cheklists && <span>{card.cheklists.length}📝</span>}
                        {card.cardMembers && <span>{card.cardMembers.length}👤</span>}
                        {card.attachments && <span>{card.attachments.length}📦</span>}
                        {card.dueDate && <span>⏰</span>}

                    </div>
                </div>
            )}
        </Draggable>
    )
}
