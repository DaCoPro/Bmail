import './ActionRibbon.css';
import * as messagesAPI from '../../utilities/messages-api';



export default function ActionRibbon ({ setMessages, msg, activeMsg }) {
    function handleDeleteMsg () {
        messagesAPI.deleteMsg(activeMsg);

    }

    return (
        <div className="ActionRibbon">
            <h5 onClick={ handleDeleteMsg }>DELETE</h5>
            
        </div>
    )
}