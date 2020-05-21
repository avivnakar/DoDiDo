import React, { Component } from 'react'

export function CardPreiview(props) {

    const { card } = props
    return (
        <div onClick={() => props.getCurrCard(card)}>
            <span>{card.title}</span>
            <div>
                {card.cheklists && <span>{card.cheklists.length}📝</span>}
                {card.cardMembers && <span>{card.cardMembers.length}👤</span>}
                {card.attachments && <span>{card.attachments.length}📦</span>}
                {card.dueDate && <span>⏰</span>}

            </div>
        </div>
    )
}
