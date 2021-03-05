import './Sent.css';
import SentListItem from '../SentListItem/SentListItem';
import Detail from '../Detail/Detail';


export default function Sent ({ activeTab, sentMessages, activeMsg, setActiveMsg }) {

    const messageList = sentMessages.data.map(sM => 
        <SentListItem key={sM.id} sentMessage={sM} setActiveMsg={setActiveMsg} />
    );

    return (
        <div className="Sent">
            
            
            {activeMsg ? <div> <Detail activeTab={activeTab} activeMsg={activeMsg}/> </div> : <div><h1>Sent</h1>{messageList}</div> }
        </div>
    )
}