import apu from "../assets/avatar/apu.jpeg";

export default function Discu() {
  return (
    <div className="message-box">
      <img className="apu" src={apu} alt="profile " />
      <textarea className="aera-only" readOnly>
        "salut cava ? j'aime bien les capy et toi ?"
      </textarea>
    </div>
  );
}
