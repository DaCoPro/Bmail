import './Compose.css';
import * as messagesAPI from '../../utilities/messages-api';
import { useState } from 'react';

export default function Compose () {
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
            
        } catch {
          setError('Message Failed to Send - Try Again');
        }
    }
    return (
        <div className="Compose">
            <div>
                <div className="form-container" onSubmit={handleSubmit}>
                    <form autoComplete="off" >
                    <label>To: </label>
                    <input type="text" name="receiver" value={content.receiver} onChange={handleChange} required />
                    <label>Title: </label>
                    <input type="text" name="title" value={content.title} onChange={handleChange} required />
                    <label>Content: </label>
                    <input type="text" name="body" value={content.body} onChange={handleChange} required />
                    <button type="submit">SEND</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </div>
    )
}