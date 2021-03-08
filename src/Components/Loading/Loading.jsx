import "./Loading.css";
import loadingImg from "./loadingImg.png";
export default function Loading() {
  return (
    <div className="Loading">
      <img src={loadingImg} alt="Bmail Logo" />
    </div>
  );
}
