import './LoggedIn.css';

import { useState, useEffect } from 'react';

import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import Inbox from '../../Components/Inbox/Inbox';
import Sent from '../../Components/Sent/Sent';
import Compose from '../../Components/Compose/Compose';

export default function LoggedIn ({ user, setUser }) {
    const [activeTab, setActiveTab] = useState(1);
    
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