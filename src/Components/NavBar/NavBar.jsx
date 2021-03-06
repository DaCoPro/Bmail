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
                    className="ComposeBtn"
                >Compose</h4>
                <div className="BoxLinks">

                    <p onClick={ handleInboxClick }
                        className={activeTab === 1 ? 'Active' : 'Not'}
                    >Inbox</p>
                    <p onClick={ handleSentClick }
                        className={activeTab === 2 ? 'Active' : 'Not'}
                    >Sent</p>
                </div>

            </div>
            
            <div className="NavSecondary">
                <button onClick={() => { handleLogOut()  }}
                >Log Out</button>

            </div>
        </div>

    )
}