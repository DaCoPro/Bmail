import './LoggedIn.css';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../utilities/users-service';

export default function LoggedIn ({ user, setUser }) {
    const history = useHistory();
    function handleLogOut () {
        localStorage.removeItem('token');
        setUser(getToken());
    }
    return (
        <div className="LoggedIn">
            <button onClick={() => { handleLogOut () }}
            >Log Out</button>
            <h1>{user ? "user" : null}</h1>

        </div>
    )
}