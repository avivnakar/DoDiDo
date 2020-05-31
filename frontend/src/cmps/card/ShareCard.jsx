import React from 'react';

export function ShareCard(props) {
    const { card } = props;
    return <input className="" 
    type="text"
     readOnly
      value={encodeURI(`${window.location.href}/c/${card.id}/${card.title}`)} 
      autoFocus />
}