import "./home.css";
import uniwork from "../assets/images/Logo uniwork.svg";
import inclusivity from "../assets/images/pexels-markus-winkler-1430818-18465019.jpg";

export default function Home() {
  return (
    <div className="accueil-container">
      <img id="uniwork" src={uniwork} alt="logo" />
      <h1>Bienvenue "pseudo"</h1>
      <article>
        <h2>Voici quelques articles qui peuvent t 'interesser</h2>
        <h3>la discrimination au travail</h3>
        <img src={inclusivity} alt="inclusivity" />
      </article>
    </div>
  );
}
