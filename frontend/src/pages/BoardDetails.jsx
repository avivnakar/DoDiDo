import React, { Component } from 'react'
import { connect } from 'react-redux'

export class _BoardDetails extends Component {

    render() {
        const { board } = this.props;
        console.log(board);
        return (
            <pre>{board && JSON.stringify(board, null, 2).split('"').join('')}</pre>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        board: {
            "_id": "5c09",
            "name": "BoardMcBoardy",
            "desc": "this board is board",
            "background": "/fdsfsdfds.jpg",
            "createdBy": {
                "_id": "u101",
                "fullName": "Gal Rondel",
                "imgUrl": "././img/troll.jpg"
            },
            "members": [
                {
                    "_id": "u101",
                    "fullName": "Gal Rondel",
                    "imgUrl": "././img/troll.jpg"
                },
                {
                    "_id": "u401",
                    "fullName": "Aviv Nakar",
                    "imgUrl": "././img/adf.jpg"
                }
            ],
            "activities": [],
            "cardLists": [
                {
                    "title": "Grabage bin",
                    "id": "recycleBin_5c09",
                    "cards": []
                },
                {
                    "title": "The End Sprint",
                    "id": "s100",
                    "cards": [
                        {
                            "id": "5c09",
                            "title": "Do It",
                            "labels": [
                                {
                                    "title": "IT",
                                    "color": "red"
                                },
                                {
                                    "title": "",
                                    "color": "orange"
                                }
                            ],
                            "createdBy": {
                                "_id": "u401",
                                "fullName": "Aviv Nakar",
                                "imgUrl": "././img/adf.jpg"
                            },
                            "cardMembers": [
                                {
                                    "_id": "u401",
                                    "fullName": "Aviv Nakar",
                                    "imgUrl": "././img/adf.jpg"
                                }
                            ],
                            "desc": "lorem blabla bla bla bla",
                            "dueDate": 5413234551234,
                            "cheklists": [
                                {
                                    "id": "14s3",
                                    "title": "checklist22",
                                    "todos": [
                                        {
                                            "id": "14sf3",
                                            "text": "lorem blabla bla bla bla",
                                            "doneAt": 14325434545,
                                            "doneBy": {
                                                "_id": "u401",
                                                "fullName": "Aviv Nakar",
                                                "imgUrl": "././img/adf.jpg"
                                            }
                                        }
                                    ]
                                }
                            ],
                            "attachments": [
                                {
                                    "id": "23s4",
                                    "name": "lorem",
                                    "url": "././img/ape.jpg",
                                    "addedBy": {
                                        "_id": "u401",
                                        "fullName": "Aviv Nakar",
                                        "imgUrl": "././img/adf.jpg"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

const mapDispatchToProps = {
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)

