import React from 'react';
import { LabelPreiview } from './LabelPreiview.jsx';
export function LabelList(props) {
    const { labels, command } = props
    return (
        <div className="label-list flex">
            {labels.map((label, index) => <LabelPreiview key={index} label={label} command={command} />)}
        </div>
    )
}
