import "./LoggedIn.css";

import { useState, useEffect } from "react";

import * as messagesAPI from "../../utilities/messages-api";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Inbox from "../../Components/Inbox/Inbox";
import Sent from "../../Components/Sent/Sent";
import Compose from "../../Components/Compose/Compose";
import Loading from "../../Components/Loading/Loading";
import ActionRibbon from "../../Components/ActionRibbon/ActionRibbon";

export default function LoggedIn({ user, setUser, userName }) {
  const [activeTab, setActiveTab] = useState(0);
  const [messages, setMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [activeMsg, setActiveMsg] = useState(0);

  useEffect(function () {
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

  function checkLoaded() {
    if (activeTab !== 0) {
      return;
    } else if (messages === []) {
      setTimeout(checkLoaded, 500);
    } else {
      setActiveTab(1);
    }
  }
  setTimeout(checkLoaded, 1500);

  return (
    <div className="LoggedIn">
      <div className="HeaderDiv">
        <Header userName={userName} />
      </div>
      <div className="BodyDiv">
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setUser={setUser}
          setActiveMsg={setActiveMsg}
        />
        <div className="BodyDisplayDiv">
          <div className="DisplayRibbon">
            {activeTab !== 3 ? (
              <ActionRibbon
                activeMsg={activeMsg}
                setMessages={setMessages}
                setSentMessages={setSentMessages}
              />
            ) : null}
          </div>
          <div className="DisplayBody">
            {activeTab === 0 ? <Loading /> : null}
            {activeTab === 1 ? (
              <Inbox
                messages={messages}
                activeMsg={activeMsg}
                setActiveMsg={setActiveMsg}
                activeTab={activeTab}
                setMessages={setMessages}
              />
            ) : null}
            {activeTab === 2 ? (
              <Sent
                sentMessages={sentMessages}
                activeMsg={activeMsg}
                setActiveMsg={setActiveMsg}
                activeTab={activeTab}
                setSentMessages={setSentMessages}
              />
            ) : null}
            {activeTab === 3 ? <Compose /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
