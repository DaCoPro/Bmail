import "./ActionRibbon.css";
import * as messagesAPI from "../../utilities/messages-api";
import { useHistory } from "react-router-dom";

export default function ActionRibbon({
  setMessages,
  setSentMessages,
  activeMsg,
}) {
  const history = useHistory();
  async function handleDeleteMsg() {
    messagesAPI.deleteMsg(activeMsg);
    const messages = await messagesAPI.getMessages();
    const sentMessages = await messagesAPI.getSentMessages();
    setMessages(messages);
    setSentMessages(sentMessages);
    history.push("/");
  }
  async function handleRefresh() {
    const messages = await messagesAPI.getMessages();
    const sentMessages = await messagesAPI.getSentMessages();
    setMessages(messages);
    setSentMessages(sentMessages);
    history.push("/");
  }

  return (
    <div className="ActionRibbon">
      <h5 className="ActionItem" onClick={handleRefresh}>
        REFRESH
      </h5>

      {activeMsg ? <h5 onClick={handleDeleteMsg}>DELETE</h5> : null}
    </div>
  );
}
