import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaRegCheckSquare, FaRegClock, FaRegUser, FaRegListAlt } from "react-icons/fa";
// import { FaEye, FaRegCheckSquare, FaRegClock, FaRegCommentAlt, FaRegUser,FaRegListAlt } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { LabelList } from '../board/LabelList.jsx';
export function CardPreiview(props) {
    const { card, history, onCardRemove } = props
    var isHover = useState(false);
    return (
        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (
                <article className="card" /*onClick={() => props.getCurrCard(card)}*/
                    onClick={() => history.push(`/c/${card.id}/${card.title}`)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    // onMouseOver={(ev=>{
                    //     isHover=true;
                    //     console.log(isHover);
                    // })}
                    // onMouseLeave={(ev=>{
                    //     isHover=false;
                    //     console.log(isHover);
                    // })}
                >
                    <button className="del" onClick={onCardRemove(card.id)}>⨯</button>
                    <div>
                        {card.labels && <LabelList labels={card.labels} />}
                    </div>
                    <span>{card.title}</span>
                    <div className="card-stat flex">
                        {card.desc && <div title="Description"><FaRegListAlt /></div>}
                        {card.cardMembers.length > 0 && <div title="Members assigned">{card.cardMembers.length}{<FaRegUser />}</div>}
                        {card.cheklists.length > 0 && <div title="Checklist items">{card.cheklists.length}{<FaRegCheckSquare />}</div>}
                        {card.dueDate && <span>{<FaRegClock />}</span>}
                        {card.attachments.length > 0 && <div title="Attachments">{card.attachments.length}{<AiOutlineDatabase />}</div>}
                    </div>
                </article>
            )}
        </Draggable>
    )
}
