import React, { Component } from 'react';
import { LabelPreiview } from './LabelPreiview.jsx';
export function LabelList(props) {
        const {labels} = props
        return (
            labels.map(label => <LabelPreiview  key={label.color} label={label}/>)
        )
}
