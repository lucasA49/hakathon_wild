import apu from "../assets/avatar/apu.jpeg";
import bart from "../assets/avatar/Bart.png";

export default function Discu() {
  return (
    <div className="message-box">
      <img className="apu" src={apu} alt="profile " />
      <textarea className="aera-only" readOnly>
        "salut cava ? j'aime bien les capy et toi ?"
      </textarea>
      <img className="bart" src={bart} alt="profile " />
      <textarea className="aera-only1" readOnly>
        "salut cava ? j'aime bien les capy et toi ?"
      </textarea>
      <img className="apu1" src={apu} alt="profile " />
      <textarea className="aera-only2" readOnly>
        "salut cava ? j'aime bien les capy et toi ?"
      </textarea>
      <img className="bart1" src={bart} alt="profile " />
      <textarea className="aera-only3" readOnly>
        "salut cava ? j'aime bien les capy et toi ?"
      </textarea>
    </div>
  );
}
