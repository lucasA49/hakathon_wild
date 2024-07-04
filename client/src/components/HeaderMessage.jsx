import Arrow from "../assets/icone/Fichier 5.svg";
import Profil from "../assets/images/profile.jpg";

export default function HeaderMessage() {
  return (
    <header className=" header-messagerie">
      <img className="arrow-header" src={Arrow} alt="" />
      <h1 className="title-messagerie">MESSAGES</h1>
      <img className="img-profil" src={Profil} alt="" />
    </header>
  );
}
