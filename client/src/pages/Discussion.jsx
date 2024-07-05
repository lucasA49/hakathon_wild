import HeaderMessage from "../components/HeaderMessage";
import "../style/Discussion.scss";
import Avatar from "../components/Avatar";
import Chat from "../components/Chat";

export default function Discussion() {
  return (
    <>
      <header>
        <HeaderMessage />
        <Avatar />
      </header>
      <section>
        <Chat />
      </section>
    </>
  );
}
