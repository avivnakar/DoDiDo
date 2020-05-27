import React, { Component } from 'react'
import { CommentPreview } from './CommentPreview.jsx';
export function CardComments(props) {
    const { card } = props
    return (
        card.comments && card.comments.map(comment => <CommentPreview comment={comment} key={comment.id} />)
    )
}
