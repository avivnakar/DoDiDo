import React from 'react';
import { Link } from 'react-router-dom';
export function CardToWhatsapp({card,number='972525090552'}) {
    
    var { title, desc, checkLists,dueDate } = card
    title=`*${title}*`;
    desc=desc||'';
    checkLists= checkLists?checkLists.reduce((msg, checkList) => {
        const todos=checkList.todos.reduce((acc, {title,isDone}) => {
            acc.push(`• ${isDone?`~${title}~`:title}`);
            return acc;
        }, []).join('\n');
        msg.push(`*${checkList.title}*
        ${todos}`);
        return msg
    }, []).join('\n'):'';
    dueDate=dueDate?'\n'+new Date(dueDate).toLocaleString():'';
    const message = `${title}

    ${desc}

    ${checkLists}${dueDate}`
    return <a herf={`https://wa.me/${number}?text=${encodeURI(message)}`}>Send To Whatsapp</a>
}