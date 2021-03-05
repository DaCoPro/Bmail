import './InboxListItem.css';

export default function InboxListItem ({ message }) {
    console.log(message)
    return (
        <div className="InboxListItem">
            <h4>{message.sender} {message.title}</h4>
        </div>
    )
}