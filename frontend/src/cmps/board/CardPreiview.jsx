import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaRegComment, FaRegCheckSquare, FaRegClock, FaRegUser, FaRegListAlt } from "react-icons/fa";
// import { FaEye, FaRegCheckSquare, FaRegClock, FaRegCommentAlt, FaRegUser,FaRegListAlt } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { LabelList } from '../board/LabelList.jsx';
import { FaPencilAlt } from "react-icons/fa";
import { CardMenu } from '../card/CardMenu.jsx';
import { ClickAway } from '../ClickAway.jsx';

export function CardPreiview(props) {
    const { card, history, onCardRemove } = props
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

    return (

        <Draggable draggableId={card.id} index={props.index}>
            {(provided) => (<>
                <div className="card-preview-editor">
                    {isMenuOpened && <ClickAway />}
                    <div className={`card-wrapper${isMenuOpened ? ' active-card' : ''}`}>
                        <article className="card" /*onClick={() => props.getCurrCard(card)}*/
                            onClick={() => history.push(`/c/${card.id}/${card.title}`)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            {/* <button className="del" onClick={onCardRemove(card.id)}>⨯</button> */}
                            <div>
                                {card.labels && <LabelList labels={card.labels} />}
                            </div>
                            <div className="card-title-container flex space-between">
                                <span className="card-title">{card.title}</span>
                                <span className="edit-icon" onClick={onOpenMenu}><FaPencilAlt />

                                </span>
                            </div>
                            <div className="card-stat flex">
                                {card.desc && <div title="Description"><FaRegListAlt /></div>}
                                {card.cardMembers.length > 0 && <div title="Members assigned">{card.cardMembers.length}{<FaRegUser />}</div>}
                                {card.checkLists.length > 0 && <div title="Checklist items">{card.checkLists.length}{<FaRegCheckSquare />}</div>}
                                {card.comments.length > 0 && <div title="Comments items">{card.comments.length}{<FaRegComment />}</div>}
                                {card.dueDate && <span>{<FaRegClock />}</span>}
                                {card.attachments.length > 0 && <div title="Attachments">{card.attachments.length}{<AiOutlineDatabase />}</div>}
                            </div>
                        </article>
                    </div>
                    {isMenuOpened && <CardMenu closeMenu={onCloseMenu} />}
                </div>
            </>
            )}
        </Draggable>
    )
}
