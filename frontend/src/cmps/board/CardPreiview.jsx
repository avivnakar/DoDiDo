import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaRegComment, FaRegCheckSquare, FaRegUser, FaRegListAlt } from "react-icons/fa";
// import { FaEye, FaRegCheckSquare, FaRegClock, FaRegCommentAlt, FaRegUser,FaRegListAlt } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { LabelList } from '../board/LabelList.jsx';
import { Due } from '../board/Due.jsx';
import { FaPencilAlt } from "react-icons/fa";
import { CardMenu } from '../card/CardMenu.jsx';
import { ClickAway } from '../ClickAway.jsx';


export function CardPreiview(props) {
    const { card, history/* , onCardRemove  */ } = props
    var [isMenuOpened, setMenuOpened] = useState(false)
    const onOpenMenu = (ev) => {
        ev.stopPropagation();
        props.setOnClickAway(onCloseMenu);
        setMenuOpened(true);
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
        props.setOnClickAway(null);
        setMenuOpened(false);
    }
    const { background } = card
    return (

        <Draggable draggableId={card.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={`card-preview-editor${''}`}>
                    {isMenuOpened && <ClickAway onClick={onCloseMenu} />}
                    <div className={`card-wrapper ${isMenuOpened ? ' active-card' : ''}`}>
                        <div className="dnd-provider" /*onClick={() => props.getCurrCard(card)}*/
                            onClick={() => history.push(`/c/${card.id}/${card.title}`)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <article className={`card ${snapshot.isDragging ? 'tilt' : ''}`}
                                style={{ background }}

                            >
                                {console.log(provided.draggableProps.style)}
                                {/* <button className="del" onClick={onCardRemove(card.id)}>⨯</button> */}
                                <div>
                                    {card.labels && <LabelList labels={card.labels} />}
                                </div>
                                <div className="card-title-container flex space-between" >
                                    <span className="card-title">{card.title}</span>
                                    <span className="edit-icon" onClick={onOpenMenu}><FaPencilAlt />

                                    </span>
                                </div>
                                <div className="card-stat">
                                    <div className="due-time">
                                        {card.dueDate && <span><Due dueDate={card.dueDate} /></span>}
                                    </div>
                                    <div className="stat flex">
                                        {card.desc && <div title="Description flex" className="flex align-center"><FaRegListAlt /></div>}
                                        {card.cardMembers.length > 0 && <div title="Members assigned" className="flex align-center">{card.cardMembers.length}{<FaRegUser />}</div>}
                                        {card.checkLists.length > 0 && <div title="Checklist items" className="flex align-center">{card.checkLists.length}{<FaRegCheckSquare />}</div>}
                                        {card.comments.length > 0 && <div title="Comments items" className="flex align-center">{card.comments.length}{<FaRegComment />}</div>}
                                        {card.attachments.length > 0 && <div title="Attachments" className="flex align-center">{card.attachments.length}{<AiOutlineDatabase />}</div>}
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    {isMenuOpened && <CardMenu closeMenu={onCloseMenu} />}
                </div>
            )}
        </Draggable>
    )
}
