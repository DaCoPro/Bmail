import './NavBar.css';
import { getToken } from '../../utilities/users-service';

export default function NavBar ({ activeTab, setActiveTab, setUser, setActiveMsg }) {
    function handleLogOut () {
        localStorage.removeItem('token');
        setUser(getToken());
    }
    function handleInboxClick() {
        setActiveTab(1);
        setActiveMsg(0);
    }
    //make this DRY later
    function handleSentClick() {
        setActiveTab(2);
        setActiveMsg(0);
    }

    return (
        <div className="NavBar">
            <div className="NavItemDiv">
                <h4 onClick={() => setActiveTab(3)}
                    className={activeTab === 3 ? 'Active' : 'Not'}
                >Compose</h4>
                <h4 onClick={ handleInboxClick }
                    className={activeTab === 1 ? 'Active' : 'Not'}
                >Inbox</h4>
                <h4 onClick={ handleSentClick }
                    className={activeTab === 2 ? 'Active' : 'Not'}
                >Sent</h4>

            </div>
            <hr/>
            <button onClick={() => { handleLogOut()  }}
            >Log Out</button>
        </div>

    )
}