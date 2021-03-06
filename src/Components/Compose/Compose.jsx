import './Compose.css';
import * as messagesAPI from '../../utilities/messages-api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Compose () {
    const history = useHistory();
    const [content, setContent] = useState({
        "title":"",
        "body":"",
        "receiver":""
    });
    const [error, setError] = useState('');
    function handleChange(evt) {
        setContent({ ...content, [evt.target.name]: evt.target.value });
        setError('');
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await messagesAPI.sendMsg(content);
            history.push('/');
        } catch {
          setError('Message Failed to Send - Try Again');
        }
    }
    return (
        <div className="Compose">
            <div>
                <div className="ComposeHeader">
                    <h4>New Message</h4>
                </div>
                <div className="ComposeForm" onSubmit={handleSubmit}>
                    <form autoComplete="off" >
                        <div className="InputField">
                            <label>To: </label>
                            <input type="text" name="receiver" value={content.receiver} onChange={handleChange} required />
                        </div>
                        <hr/>
                        <div className="InputField">
                            <label>Title: </label>
                            <input type="text" name="title" value={content.title} onChange={handleChange} required />
                        </div>
                        <hr/>
                        <div className="ContentField">
                            <label>Content: </label>
                            <input type="text" name="body" value={content.body} onChange={handleChange} required />
                        </div>
                        
                        <button type="submit">SEND</button>
                        
                    </form>
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </div>
    )
}