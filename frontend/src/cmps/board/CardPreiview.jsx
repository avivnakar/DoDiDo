import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaRegComment, FaRegCheckSquare, FaRegUser, FaRegListAlt } from "react-icons/fa";
// import { FaEye, FaRegCheckSquare, FaRegClock, FaRegCommentAlt, FaRegUser,FaRegListAlt } from "react-icons/fa";
// import { AiOutlineDatabase } from "react-icons/ai";
import { LabelList } from '../board/LabelList.jsx';
import { Due } from '../board/Due.jsx';
import { FaPencilAlt } from "react-icons/fa";
// import { CardMenu } from '../card/CardMenu.jsx';
import { ClickAway } from '../ClickAway.jsx';
import { CardTitleEditable } from './CardTitleEditable.jsx';
import { eventBus } from '../../services/eventBusService.js';

export function CardPreiview(props) {
    const { card, history/* , onCardRemove  */ } = props
    var [isMenuOpened, setMenuOpened] = useState(false)
    const onOpenMenu = (ev) => {
        ev.stopPropagation();
        console.log(ev)
        console.log('page x,y', ev.pageX, ev.pageY)
        console.log('client x,y', ev.clientX, ev.clientX)
        console.dir(ev.target.offsetParent)
        console.dir(ev.target.offsetParent.clientHeight)
        console.log('bounduing rect', ev.target.offsetParent.getBoundingClientRect());
        console.log('client rect', ev.target.offsetParent.getClientRects());
        setMenuOpened(true);
        // const direction = (window.innerWidth - ev.clientX > 300)

        eventBus.emit('open_card_menu', ev.target.offsetParent.getBoundingClientRect())
    }
    const onCloseMenu = (ev) => {
        ev.stopPropagation();
        setMenuOpened(false);
        eventBus.emit('close_card_menu', {});
    }
    const { background } = card
    return (

        <Draggable draggableId={card.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={`card-preview-editor${''}`}>
                    {isMenuOpened && <ClickAway onClick={onCloseMenu} />}
                    <div className={`card-wrapper ${isMenuOpened ? ' active-card' : ''}`}>
                        <div className="dnd-provider" /*onClick={() => props.getCurrCard(card)}*/
                            onClick={() => (!isMenuOpened) && history.push(`/c/${card.id}/${card.title}`)}
                            {...!isMenuOpened ? provided.draggableProps : {}}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <article className={`card ${snapshot.isDragging ? 'tilt' : ''}`}
                                style={{ background }}

                            >
                                {/* <button className="del" onClick={onCardRemove(card.id)}>⨯</button> */}
                                {card.labels.length > 0 && <div>
                                    <LabelList labels={card.labels} />
                                </div>}
                                <div className="card-title-container flex space-between" >
                                    <CardTitleEditable editMode={isMenuOpened} txt={card.title} />
                                    <span className="edit-icon" onClick={onOpenMenu}><FaPencilAlt style={{ pointerEvents: 'none' }}  />
                                    </span>
                                </div>
                                {card.attachments[0] && <div className="img-prev">
                                    <img src={card.attachments[0]} alt={`attachment-${0}`} />
                                </div>}
                                <div className="card-stat">
                                    {card.dueDate && <div className="due-time">
                                        <span><Due dueDate={card.dueDate} /></span>
                                    </div>}
                                    <div className="stat flex">
                                        {card&&card.desc && <div title="Description flex" className="flex align-center"><FaRegListAlt /></div>}
                                        {card&&card.cardMembers.length > 0 && <div title="Members assigned" className="flex align-center">{card.cardMembers.length}{<FaRegUser />}</div>}
                                        {card&&card.checkLists.length > 0 && <div title="Checklist items" className="flex align-center">{card.checkLists.length}{<FaRegCheckSquare />}</div>}
                                        {card&&card.comments.length > 0 && <div title="Comments items" className="flex align-center">{card.comments.length}{<FaRegComment />}</div>}
                                        {/* {card.attachments.length > 0 && <div title="Attachments" className="flex align-center">{card.attachments.length}{<AiOutlineDatabase />}</div>} */}
                                    </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        {/* {isMenuOpened && <CardMenu closeMenu={onCloseMenu} />} */}
                    </div>
                )}
            </Draggable>
        
    )
}



// {isMenuOpened ? <textarea class="card-title edit"
//                                     dir="auto" rows="1"/*  style="height: 90px;" */>{card.title}</textarea> : <span className="card-title">{card.title}</span>}