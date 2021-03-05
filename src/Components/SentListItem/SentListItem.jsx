import './SentListItem.css';

export default function SentListItem ({ sentMessage, setActiveMsg }) {
    function handleMessageClick() {
        
        setActiveMsg(sentMessage.id)
        
    }
    return (
        <div className="SentListItem">
            <h4 onClick={handleMessageClick}>{sentMessage.receiver} {sentMessage.title}</h4>
        </div>
    )
}