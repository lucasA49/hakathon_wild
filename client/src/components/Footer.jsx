import { NavLink } from "react-router-dom";
import BubbleChat from "../assets/icone/bubble-chat.png";
import Calendar from "../assets/icone/calendar-2.png";
import Home from "../assets/icone/home-3.png";


export default function Footer() {
  return (
    <footer className="footer-container">
      <NavLink className="navCalendar" to="/contact">
        <img className="calendar" src={Calendar} alt="" />
      </NavLink>

      <NavLink className="navHome" to="/home">
        <img className="home" src={Home} alt="" />
      </NavLink>

      <NavLink className="navChat" to="/discussion">
        <img className="chat" src={BubbleChat} alt="" />
      </NavLink>
    </footer>
  );
}
