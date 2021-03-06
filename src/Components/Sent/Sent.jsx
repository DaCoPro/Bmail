import './Sent.css';
import SentListItem from '../SentListItem/SentListItem';
import Detail from '../Detail/Detail';


export default function Sent ({ activeTab, sentMessages, activeMsg, setActiveMsg, setSentMessages }) {

    const messageList = sentMessages.data.map(sM => 
        <SentListItem setSentMessages={setSentMessages} key={sM.id} sentMessage={sM} setActiveMsg={setActiveMsg} />
    );

    return (
        <div className="Sent">
            
            
            {activeMsg ? <div> <Detail  activeTab={activeTab} activeMsg={activeMsg}/> </div> : <div>{messageList}</div> }
        </div>
    )
}