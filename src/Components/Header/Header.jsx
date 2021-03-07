import "./Header.css";
import logo from "./logo-1.png";

export default function Header({ userName }) {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={logo} />
        <h1 className="Bmail">Bmail</h1>
      </div>
      {/* <h4>Welcome, {userName}</h4> */}
    </div>
  );
}
