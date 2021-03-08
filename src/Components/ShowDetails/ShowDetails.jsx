import "./ShowDetails.css";

export default function ShowDetails({ msg }) {
  return (
    <div className="ShowDetails">
      <div className="DetailsBody">
        <div className="DetailTitle">
          <h2>{msg.data.title}</h2>
        </div>
        <div className="DetailsInfo">
          <h4>
            Sent by {msg.data.sender} to {msg.data.receiver} <br />
            {msg.read ? "Message Read" : "Message Unread"}
          </h4>
        </div>
        <div className="DetailsMsg">
          <h4>{msg.data.body}</h4>
        </div>
      </div>
    </div>
  );
}
