import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { NavLink } from 'react-router-dom';
import { FaEye, FaRegCheckSquare, FaRegClock, FaRegCommentAlt, FaRegUser,FaRegListAlt } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";

export function CardPreiview(props) {
    const { card,onCardRemove,history } = props
    //console.log('card props:',props);
    
    return (
        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (
                //    <NavLink to={`/c/${card.id}/${card.title}`}>
                <article className="card" /*onClick={() => props.getCurrCard(card)}*/
                onClick={()=>history.push(`/c/${card.id}/${card.title}`)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <span>{card.title}</span>
                    <div className="card-stat flex">
                        {card.desc &&<div title="Description"><FaRegListAlt/></div>}
                        {card.cardMembers && <div title="Members assigned">{card.cardMembers.length}{<FaRegUser />}</div>}
                        {card.cheklists && <div title="Checklist items">{card.cheklists.length}{<FaRegCheckSquare />}</div>}
                        {card.dueDate && <span>{<FaRegClock />}</span>}
                        {card.attachments && <div title="Attachments">{card.attachments.length}{<AiOutlineDatabase />}</div>}
                    </div>
            {/* <button onClick={onCardRemove(card.id)}>{`❌`}</button> */}
                </article>
                //   </NavLink>
            )}
        </Draggable>
    )
}
