import './Inbox.css';
import Detail from '../Detail/Detail';
import InboxListItem from '../InboxListItem/InboxListItem';
import React, { useState, useEffect, useCallback } from 'react';

export default function Inbox ({ setMessages, activeTab, messages, activeMsg, setActiveMsg }) {
    

    const messageList = messages.data.map(m => 
        <InboxListItem key={m.id} message={m} setActiveMsg={setActiveMsg}/>
    );
    

    return (
        <div className="Inbox">
            {activeMsg ? 
            <div><Detail setMessages={setMessages} activeTab={activeTab} activeMsg={activeMsg} /> </div>
            :
            <div><h1>Inbox</h1>
            {messageList}</div>
            }
            
            
            
            
        </div>
    )
    
}