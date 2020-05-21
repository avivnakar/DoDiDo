import React, { Component } from 'react'
import { CardPreiview } from './CardPreiview.jsx';

export function ListPreiview(props) {
    const { list } = props
    console.log(list);
    return (
        <section className="list">
            <h4>{list.title}</h4>
            {list.cards && list.cards.map(card => <CardPreiview key={card.id} card={card} getCurrCard={props.getCurrCard}/>)}
            <div className="add-btn-input">
                <button>+ Add Card</button>
            </div>
        </section>
    )
}
