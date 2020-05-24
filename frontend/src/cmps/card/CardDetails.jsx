    // import React, { Component } from 'react'
    // import { CardDesc } from './CardDesc.jsx';
    // import { AddMembers } from './AddMembers.jsx';
    // import { CardTitle } from './CardTitle.jsx';
    // import { AddLabels } from './AddLabels.jsx';
    // import { LabelList } from '../board/LabelList.jsx';
    // import { MiniUser } from '../MiniUser';

    // export class CardDetails extends Component {
    //     state = {
    //         addTo: null
    //     }
    //     addMembers() {
    //         this.setState({ addTo: 'members' })
    //     }
    //     addLabels() {
    //         this.setState({ addTo: 'labels' })
    //     }
    //     render() {
    //         const { card, board, updateBoard, history } = this.props
    //         const backToBoard = (ev) => {
    //             history.push(`/b/${board._id}/${board.name}`);
    //         }
    //         if (card && board) {
    //             return (
    //                 <>
    //                     <section className="screen flex justify-center" onClick={backToBoard}>
    //                         <div className="card-details" onClick={(ev) => ev.stopPropagation()}>
    //                             <div>
    //                                 <CardTitle title={card.title} />
    //                                 <div className="flex">
    //                                     {card.labels && <div className="flex"><LabelList labels={card.labels} /><button>+Add Label</button></div>}
    //                                     {card.cardMembers.length > 0 && <div className="flex"><MiniUser users={card.cardMembers}/><button>+Add Member</button></div>}
    //                                 </div>
    //                                 <div>
    //                                     Description
    //                                 <CardDesc card={card} updateBoard={updateBoard} board={board} />
    //                                 </div>
    //                             </div>
    //                             <div className="card-btns">
    //                                 <button onClick={() => this.addMembers()}>Members</button>
    //                                 <button onClick={() => this.addLabels()}>Labels</button>
    //                                 <button>Checklist</button>
    //                                 <button>Due Date</button>
    //                                 <button>Attachment</button>
    //                                 {this.state.addTo === 'members' && <AddMembers boardUsers={board.members} cardMembers={card.cardMembers} board={board} updateBoard={updateBoard} />}
    //                                 {this.state.addTo === 'labels' && <AddLabels cardLabels={card.labels} board={board} updateBoard={updateBoard} />}
    //                             </div>
    //                         </div>
    //                     </section>
    //                 </>
    //             )
    //         } else return <div>עוד רגע כפרע</div>
    //     }
    // }
