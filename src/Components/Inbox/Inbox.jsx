import './Inbox.css';
import InboxListItem from '../InboxListItem/InboxListItem';
import React, { useState, useEffect, useCallback } from 'react';

export default function Inbox ({ messages }) {
   
    const messageList = messages.data.map(m => 
        <InboxListItem key={m.id} message={m} />
    );
    

    return (
        <div className="Inbox">
            <h1>Inbox</h1>
            {messageList}
            
            
            
        </div>
    )
    
}