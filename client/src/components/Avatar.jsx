import bart from "../assets/avatar/Bart.png";
import capybara from "../assets/avatar/Capybara.png";
import capybara2 from "../assets/avatar/capybara2.png";
import capybara3 from "../assets/avatar/capybara3.jpg";
import capybara4 from "../assets/avatar/capybara4.jpg";
import capyfinal from "../assets/avatar/capyfinal.jpg";
import homer from "../assets/avatar/homer.png";
import koala from "../assets/avatar/koala.jpg";
import fleche from "../assets/icone/flechetop.png";

export default function Avatar() {
  const avatarList = [
    {
      id: 1,
      src: bart,
      alt: "bart profile",
    },
    {
      id: 2,
      src: capybara,
      alt: "capybara profile",
    },
    {
      id: 2,
      src: capybara2,
      alt: "capybara profile",
    },
    {
      id: 3,
      src: capybara3,
      alt: "capybara profile",
    },
    {
      id: 4,
      src: capybara4,
      alt: "capybara profile",
    },
    {
      id: 5,
      src: capyfinal,
      alt: "capy profile",
    },
    {
      id: 6,
      src: homer,
      alt: "homer profile",
    },
    {
      id: 7,
      src: koala,
      alt: "koala profile",
    },
  ];
  return (
    <ul className="img-avatar">
      <h2>Participant.e.s</h2>
      <li>
        {avatarList.map((element) => (
          <img key={element.id} src={element.src} alt={element.alt} />
        ))}
      </li>
      <img className="wrapper-button" src={fleche} alt="enrouler le menu " />
    </ul>
  );
}
