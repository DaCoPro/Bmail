import "./Header.css";
import logo from "./logo-1.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={logo} alt="Bmail Logo" />
        <h1 className="Bmail">Bmail</h1>
      </div>
    </div>
  );
}
