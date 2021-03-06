import './InboxListItem.css';
import { useHistory } from 'react-router-dom';
import * as messagesAPI from '../../utilities/messages-api';

export default function InboxListItem ({ message, setActiveMsg, setMessages}) {
    const history = useHistory();
    function handleMessageClick() {
        setActiveMsg(message.id)
        
    }
    async function handleDeleteMsg () {
        messagesAPI.deleteMsg(message.id);
        const messages = await messagesAPI.getMessages();
        setMessages(messages)
        history.push('/');
    }
    return (
        <div onClick={handleMessageClick} className="InboxListItem">
           
            <h4>{message.sender} {message.title}</h4>
            <button onClick={handleDeleteMsg}>delete</button>
        </div>
    )
} 