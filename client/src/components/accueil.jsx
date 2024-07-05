import "../style/Home.scss";

export default function Accueil() {
  return (
    <>
      <div className="div-accueil">
        <h1 className="title-home">Bienvenue utilisateur</h1>
        <p className="p-home">
          Voici quelques articles qui <br /> peuvent tintéresser
        </p>
      </div>
      <article className="card-home">
        <p className="jeudi">Jeudi 14h</p>
        <p className="visite"> visite de la crèche</p>
        <p className="participer2">Participer</p>
        <p> participer</p>
      </article>
      <article className="card-home2">
        <p>Vendredi 18h</p>
        <p>Afterwork</p>
        <p className="participer3">Participer</p>
      </article>
    </>
  );
}
