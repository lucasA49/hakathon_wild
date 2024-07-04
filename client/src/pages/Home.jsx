import "./home.css";
import uniwork from "../assets/images/Logo uniwork.svg";
import inclusivity from "../assets/images/pexels-markus-winkler-1430818-18465019.jpg";

export default function Home() {
  return (
    <div className="accueil-container">
      <img id="uniwork" src={uniwork} alt="logo" />
      <h1>Bienvenue "pseudo"</h1>

      <h2>Voici quelques articles qui peuvent t 'interesser</h2>
      <article>
        <h4>la discrimination au travail</h4>

        <img id="inclusivity" src={inclusivity} alt="inclusivity" />
        <button type="button">lire</button>
      </article>
    </div>
  );
}
