import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
export function CardToWhatsapp(props) {
    const { card } = props;

    return <WhatsappLink card={card} />
}



function WhatsappLink({ card, number = '972502494210' }) {

    var { title, desc, checkLists, dueDate } = card
    title = `*${title}*`;
    desc = desc ? `${'\n\n' + desc}` : '';
    checkLists = checkLists ? '\n\n' + checkLists.reduce((msg, checkList) => {
        const todos = checkList.todos.reduce((acc, { title, isDone }) => {
            acc.push(`• ${isDone ? `~${title}~` : title}`);
            return acc;
        }, []).join('\n');
        msg.push(`*${checkList.title}*${'\n' + todos}`);
        return msg
    }, []).join('\n') : '';
    dueDate = dueDate ? `${'\n'}Due: ${new Date(dueDate).toLocaleString()}` : '';
    const message = title + desc + checkLists + dueDate
    return <a target="_blank" rel="noopener noreferrer"
        className="whatsapp-link" href={`https://api.whatsapp.com/send/?phone=${
            number}&text=${encodeURI(message)}&source&data&app_absent`}
    >Send To Whatsapp <FaWhatsapp /></a>
}

/**
 * href="https://web.whatsapp.com/send?phone=972525090552&text=%2Anew+card%2A%0A%0A++++descriptio%0A%0A++++%2Achecklit+title%2A%0A++++++++%E2%80%A2+todo+1%0A%E2%80%A2+todo+2&source&data&app_absent"
 *
 * Request URL: whatsapp://send/?phone=972525090552&text=*new%20card*%0A%0A%20%20%20%20descriptio%0A%0A%20%20%20%20*checklit%20title*%0A%20%20%20%20%20%20%20%20%E2%80%A2%20todo%201%0A%E2%80%A2%20todo%202&source&data&app_absent

 */