import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListPreiview } from '../cmps/board/ListPreiview.jsx';
import { CardDetails } from '../cmps/board/card/CardDetails.jsx';
import { setBoard } from '../store/actions/boardActions.js';
import { boardService } from '../services/boardService.js';
import { DragDropContext } from 'react-beautiful-dnd';

export class _BoardDetails extends Component {
    state = {
        currCard: null
    }
    componentDidMount() {
        const id = this.props.match.params.boardId;
        boardService.getById(id)
            .then(board => this.props.setBoard(board))
    }
    getCurrCard = (card) => {
        this.setState({
            currCard: card
        })
    }
    onDragEnd = result => {
        // const { destination, source, draggableId } = result;
        // if(!destination) return;
        // if(destination.draggableId === source.draggableId &&
        //     destination.index === source.index) return; 
        // const list = this.props.board.cardLists[source.draggableId];
        // const newCardIds = Array.from(list.carIds)
        // newCardIds.splice(source.index,1)
        // newCardIds.splice(destination.index,0,draggableId)

        // const newList = {
        //     ...list,
        //     carIds: newCardIds
        // }
    };
    render() {
        const { board } = this.props;
        if (board) {

            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <React.Fragment>
                        {this.state.currCard && <CardDetails card={this.state.currCard} members={board.members} />}
                        {board.cardLists && board.cardLists.map(list => <ListPreiview key={list.id} list={list} getCurrCard={this.getCurrCard} />)}
                        {/* <pre style={{textAlign:"left"}}>{board && JSON.stringify(board, null, 2).split('"').join('')}</pre> */}
                    </React.Fragment>
                </DragDropContext>
            );
        } else {
            return (<span>no such board</span>);
        }

    }
}
const mapStateToProps = (state) => {
    return {
        board: state.board.currBoard,
        // board: {
        //     "_id": "5c09",
        //     "name": "BoardMcBoardy",
        //     "desc": "this board is board",
        //     "background": "/fdsfsdfds.jpg",
        //     "createdBy": {
        //         "_id": "u101",
        //         "fullName": "Gal Rondel",
        //         "imgUrl": "././img/troll.jpg"
        //     },
        //     "members": [
        //         {
        //             "_id": "u101",
        //             "fullName": "Gal Rondel",
        //             "imgUrl": "adf.png"
        //         },
        //         {
        //             "_id": "u401",
        //             "fullName": "Aviv Nakar",
        //             "imgUrl": "adf.png"
        //         }
        //     ],
        //     "activities": [],
        //     "cardLists": [
        //         {
        //             "title": "Grabage bin",
        //             "id": "recycleBin_5c09",
        //             "cards": []
        //         },
        //         {
        //             "title": "The End Sprint",
        //             "id": "s100",
        //             "cards": [
        //                 {
        //                     "id": "5c09",
        //                     "title": "Do It",
        //                     "labels": [
        //                         {
        //                             "title": "IT",
        //                             "color": "red"
        //                         },
        //                         {
        //                             "title": "",
        //                             "color": "orange"
        //                         }
        //                     ],
        //                     "createdBy": {
        //                         "_id": "u401",
        //                         "fullName": "Aviv Nakar",
        //                         "imgUrl": "adf.jpg"
        //                     },
        //                     "cardMembers": [
        //                         {
        //                             "_id": "u401",
        //                             "fullName": "Aviv Nakar",
        //                             "imgUrl": "adf.png"
        //                         }
        //                     ],
        //                     "desc": "testin testin testing",
        //                     "dueDate": 5413234551234,
        //                     "cheklists": [
        //                         {
        //                             "id": "14s3",
        //                             "title": "checklist22",
        //                             "todos": [
        //                                 {
        //                                     "id": "14sf3",
        //                                     "text": "lorem blabla bla bla bla",
        //                                     "doneAt": 14325434545,
        //                                     "doneBy": {
        //                                         "_id": "u401",
        //                                         "fullName": "Aviv Nakar",
        //                                         "imgUrl": "adf.jpg"
        //                                     }
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "attachments": [
        //                         {
        //                             "id": "23s4",
        //                             "name": "lorem",
        //                             "url": "././img/ape.jpg",
        //                             "addedBy": {
        //                                 "_id": "u401",
        //                                 "fullName": "Aviv Nakar",
        //                                 "imgUrl": "adf.jpg"
        //                             }
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // }
        // board: {
        //     "_id": "5c09",
        //     "name": "BoardMcBoardy",
        //     "desc": "this board is board",
        //     "background": "/fdsfsdfds.jpg",
        //     "createdBy": {
        //         "_id": "u101",
        //         "fullName": "Gal Rondel",
        //         "imgUrl": "././img/troll.jpg"
        //     },
        //     "members": [
        //         {
        //             "_id": "u101",
        //             "fullName": "Gal Rondel",
        //             "imgUrl": "adf.png"
        //         },
        //         {
        //             "_id": "u401",
        //             "fullName": "Aviv Nakar",
        //             "imgUrl": "adf.png"
        //         }
        //     ],
        //     "activities": [],
        //     "cardLists": [
        //         {
        //             "title": "Grabage bin",
        //             "id": "recycleBin_5c09",
        //             "cards": []
        //         },
        //         {
        //             "title": "The End Sprint",
        //             "id": "s100",
        //             "cards": [
        //                 {
        //                     "id": "5c09",
        //                     "title": "Do It",
        //                     "labels": [
        //                         {
        //                             "title": "IT",
        //                             "color": "red"
        //                         },
        //                         {
        //                             "title": "",
        //                             "color": "orange"
        //                         }
        //                     ],
        //                     "createdBy": {
        //                         "_id": "u401",
        //                         "fullName": "Aviv Nakar",
        //                         "imgUrl": "adf.jpg"
        //                     },
        //                     "cardMembers": [
        //                         {
        //                             "_id": "u401",
        //                             "fullName": "Aviv Nakar",
        //                             "imgUrl": "adf.png"
        //                         }
        //                     ],
        //                     "desc": "testin testin testing",
        //                     "dueDate": 5413234551234,
        //                     "cheklists": [
        //                         {
        //                             "id": "14s3",
        //                             "title": "checklist22",
        //                             "todos": [
        //                                 {
        //                                     "id": "14sf3",
        //                                     "text": "lorem blabla bla bla bla",
        //                                     "doneAt": 14325434545,
        //                                     "doneBy": {
        //                                         "_id": "u401",
        //                                         "fullName": "Aviv Nakar",
        //                                         "imgUrl": "adf.jpg"
        //                                     }
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "attachments": [
        //                         {
        //                             "id": "23s4",
        //                             "name": "lorem",
        //                             "url": "././img/ape.jpg",
        //                             "addedBy": {
        //                                 "_id": "u401",
        //                                 "fullName": "Aviv Nakar",
        //                                 "imgUrl": "adf.jpg"
        //                             }
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     "id": "5539",
        //                     "title": "Done PLS",
        //                     "labels": [
        //                         {
        //                             "title": "IT",
        //                             "color": "red"
        //                         },
        //                         {
        //                             "title": "",
        //                             "color": "orange"
        //                         }
        //                     ],
        //                     "createdBy": {
        //                         "_id": "u401",
        //                         "fullName": "Aviv Nakar",
        //                         "imgUrl": "adf.jpg"
        //                     },
        //                     "cardMembers": [
        //                         {
        //                             "_id": "u401",
        //                             "fullName": "Aviv Nakar",
        //                             "imgUrl": "adf.png"
        //                         }
        //                     ],
        //                     "desc": "testin testin testing",
        //                     "dueDate": 5413234551234,
        //                     "cheklists": [
        //                         {
        //                             "id": "14h3",
        //                             "title": "checklist22",
        //                             "todos": [
        //                                 {
        //                                     "id": "14s6f3",
        //                                     "text": "lorem blabla bla bla bla",
        //                                     "doneAt": 14325434545,
        //                                     "doneBy": {
        //                                         "_id": "u401",
        //                                         "fullName": "Aviv Nakar",
        //                                         "imgUrl": "adf.jpg"
        //                                     }
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "attachments": [
        //                         {
        //                             "id": "24s4",
        //                             "name": "lorem",
        //                             "url": "././img/ape.jpg",
        //                             "addedBy": {
        //                                 "_id": "u401",
        //                                 "fullName": "Aviv Nakar",
        //                                 "imgUrl": "adf.jpg"
        //                             }
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // }
    }
}

const mapDispatchToProps = {
    setBoard
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)

