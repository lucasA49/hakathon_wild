import Logo from "../assets/images/Logo.svg";
import Profil from "../assets/icone/Profil.svg";
import "../style/Home.scss";

export default function HeaderHome() {
  return (
    <div>
      <img className="profil" src={Profil} alt="" />
      <img className="logo" src={Logo} alt="" />
    </div>
  );
}
