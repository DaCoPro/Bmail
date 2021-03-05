import './ShowDetails.css';
import ActionRibbon from '../ActionRibbon/ActionRibbon';

export default function ShowDetails ({ setMessages, msg, activeMsg }) {
    console.log(msg.data.title)
    return (
        <div className="ShowDetails">
            <ActionRibbon msg={msg} setMessages={setMessages} activeMsg={activeMsg}/> 
            <div className="DetailsBody">
                <h2>{msg.data.title}</h2>
                <h4>{msg.data.body}</h4>

            </div>
        </div>
    )
}