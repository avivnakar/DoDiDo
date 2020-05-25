import React from 'react';
import { LabelPreiview } from './LabelPreiview.jsx';
export function LabelList(props) {
        const {labels,command} = props
        return (
            <div className="flex">
                {labels.map(label => <LabelPreiview  key={label.color} label={label} command={command}/>)}
            </div>
        )
}
