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
import { CardTitleEditable } from './CardTitleEditable.jsx';

export function CardPreiview(props) {
    const { card, history/* , onCardRemove  */ } = props
    var [isMenuOpened, setMenuOpened] = useState(false)
    const onOpenMenu = (ev) => {
        ev.stopPropagation();
        setMenuOpened(true);
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
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
                                    <CardTitleEditable editMode={isMenuOpened} txt={card.title} />
                                    <span className="edit-icon" onClick={onOpenMenu}><FaPencilAlt />

                                    </span>
                                </div>
                                <div className="card-stat flex">
                                    {card.desc && <div title="Description"><FaRegListAlt /></div>}
                                    {card.cardMembers.length > 0 && <div title="Members assigned">{card.cardMembers.length}{<FaRegUser />}</div>}
                                    {card.checkLists.length > 0 && <div title="Checklist items">{card.checkLists.length}{<FaRegCheckSquare />}</div>}
                                    {card.comments.length > 0 && <div title="Comments items">{card.comments.length}{<FaRegComment />}</div>}
                                    {card.dueDate && <span><Due dueDate={card.dueDate} /></span>}
                                    {card.attachments.length > 0 && <div title="Attachments">{card.attachments.length}{<AiOutlineDatabase />}</div>}
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



// {isMenuOpened ? <textarea class="card-title edit"
//                                     dir="auto" rows="1"/*  style="height: 90px;" */>{card.title}</textarea> : <span className="card-title">{card.title}</span>}