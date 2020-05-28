import {Link} from 'react-router-dom';
export function TextToWhatsapp(props) {
    const { text, number } = props;
    return <Link to={`https://wa.me/${number}?text=${encodeURI(text)}`}>Send To Whatsapp</Link>
}