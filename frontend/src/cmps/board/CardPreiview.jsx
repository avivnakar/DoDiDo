import React, { Component } from 'react'

export function CardPreiview(props) {
    console.log('this card:', props);
    const { card } = props
    return (
        <div>
            <span>{card.title}</span>
            <div>
                {card.cheklists && <span>📝</span>}
                {card.cardMembers && <span>👤</span>}
                {card.attachments && <span>📦</span>}
                {card.dueDate && <span>⏰</span>}

            </div>
        </div>
    )
}
