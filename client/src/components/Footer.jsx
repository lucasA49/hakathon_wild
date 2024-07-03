import BubbleChat from "../assets/icone/bubble-chat.png";
import Calendar from "../assets/icone/calendar-2.png";
import Home from "../assets/icone/home-3.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="calendar" src={Calendar} alt="" />
      <img className="home" src={Home} alt="" />
      <img className="chat" src={BubbleChat} alt="" />
    </footer>
  );
}
