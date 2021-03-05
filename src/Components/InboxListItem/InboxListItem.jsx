import './InboxListItem.css';

export default function InboxListItem ({ message, setActiveMsg }) {
    function handleMessageClick() {
        setActiveMsg(message.id)
        
    }
    return (
        <div className="InboxListItem">
            <h4 onClick={handleMessageClick} >{message.sender} {message.title}</h4>
        </div>
    )
} 