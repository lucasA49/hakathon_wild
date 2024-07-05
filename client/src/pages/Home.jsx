import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import uniwork from "../assets/images/Logo uniwork.svg";
import inclusivity from "../assets/images/pexels-markus-winkler-1430818-18465019.jpg";
import unsplash from "../assets/images/clay-banks-LjqARJaJotc-unsplash.jpg";
import christina from "../assets/images/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg";
import "./home.css";
// requires a loader

export default function Home() {
  const datas = [
    {
      id: 1,
      text: "La discrimination au travail",
      image: inclusivity,
    },
    {
      id: 2,
      text: "L'égailté pour tous",
      image: unsplash,
    },
    { id: 3, text: "l'apprentissage au travail", image: christina },
  ];
  return (
    <div className="accueil-container">
      <img id="uniwork" src={uniwork} alt="logo" />
      <h1>Bienvenue "pseudo"</h1>

      <h2>Voici quelques articles qui peuvent t'intéresser</h2>
      <Carousel>
        {datas.map((data) => (
          <div key={data.id}>
            <img className="slides" src={data.image} alt="slide" />
            <p>{data.text}</p>
          </div>
        ))}
      </Carousel>

      <h2>Les événements de la semaine</h2>
      <div className="container-events">
        <div className="event">
          <h4>Jeudi 14h</h4>
          <p>visite de la crèche</p>
          <button type="button">Participer</button>
        </div>
        <div className="event2">
          <h4>Vendredi 14h</h4>
          <p>Afterwork</p>
          <button type="button">Participer</button>
        </div>
      </div>
      <button id="btn" type="button">
        Repondre au sondage
      </button>
      <div className="rgbd">
        <ul>
          <li>Politique de confidentialité</li>
          <li>Conditions d'utilisation</li>
          <li>Paramètres des cookies</li>
        </ul>
      </div>
      <p>&copy;uniwork.com</p>
    </div>
  );
}
