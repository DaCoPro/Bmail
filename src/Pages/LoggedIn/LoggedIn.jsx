import './LoggedIn.css';

import { useState, useEffect } from 'react';

// import * as usersAPI from '../../utilities/users-api';
import * as messagesAPI from '../../utilities/messages-api';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import Inbox from '../../Components/Inbox/Inbox';
import Sent from '../../Components/Sent/Sent';
import Compose from '../../Components/Compose/Compose';

export default function LoggedIn ({ user, setUser }) {
    const [activeTab, setActiveTab] = useState(1);
    const [messages, setMessages] = useState([]);
    const [sentMessages, setSentMessages] = useState([]);

    useEffect(function() {
        async function fetchMessages() {
          if (user) {
            const messages = await messagesAPI.getMessages();
            const sentMessages = await messagesAPI.getSentMessages();
            setMessages(messages);
            setSentMessages(sentMessages);
          }
        }
        fetchMessages();
      }, []);

    return (
        <div className="LoggedIn">
            <div className="HeaderDiv">
                <Header /> 
            </div>
            <div className="BodyDiv">
                <NavBar 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setUser={setUser}
                />
                {activeTab === 1 ? <Inbox /> : null}
                {activeTab === 2 ? <Sent /> : null}
                {activeTab === 3 ? <Compose /> : null}
            </div>
            
        </div>
    )
}