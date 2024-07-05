import "../style/Events.scss";
import foot from "../assets/images/foot-events.png";
import cocktail from "../assets/images/cocktail-events.png";
import child from "../assets/images/enfant-events.png";
import conference from "../assets/images/conference-events.png";
import car from "../assets/images/voiture-events.png";
import bowling from "../assets/images/bowling-events.png";
import searchIcon from "../assets/images/Search.svg";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Foot en salle",
      description: "3 Septembre 2024 à 20:00 Footcenter PARIS XV",
      image: foot,
    },
    {
      id: 2,
      title: "Afterwork",
      description: "22 Septembre 2024 à 20:00 La Villette",
      image: cocktail,
    },
    {
      id: 3,
      title: "Crèche family",
      description: "5 Septembre 2024 à 13:00",
      image: child,
    },
    {
      id: 4,
      title: "Atelier et conférence",
      description: "25 Octobre 2024 à 19:00 Saint-Germain des Prés",
      image: conference,
    },
    {
      id: 5,
      title: "Co-voiturage",
      description: "Du lundi au vendredi",
      image: car,
    },
    {
      id: 6,
      title: "Théâtre",
      description: "12 Octobre à 21:00 Paris XIIème",
      image: bowling,
    },
  ];

  return (
    <div className="Events">
      <header className="header-events">
        <h1 className="h1-events">Évènements à venir</h1>
        <div className="search-bar-events">
          <input
            className="input-events"
            type="text"
            placeholder="Recherche..."
          />
          <img
            src={searchIcon}
            alt="Icône de recherche"
            className="search-icon"
          />
        </div>
      </header>
      <main className="main-events">
        <div className="event-cards">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <img className="img-events" src={event.image} alt={event.title} />
              <h2 className="h2-events">{event.title}</h2>
              <p className="p-events">{event.description}</p>
              <button className="button-events" type="button">
                Inscription
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
