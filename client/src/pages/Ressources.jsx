// Ressources.jsx
import PieChart from "../components/PieChart";
import PieChart2 from "../components/PieChart2";
import PieChart3 from "../components/PieChart3";
import PieChart4 from "../components/PieChart4";
import PieChartH from "../components/PieChartHorizontale";

function Ressources() {
  return (
    <div className="ressources-container">
      <h1>Statistiques des Data Analyst</h1>
      <p className="title-graphics">
        Diriez-vous que dans votre entreprise, la diversité et l'inclusion
        contribuent à sa performance globale ?
      </p>
      <div className="graphic-container">
        <PieChart />
      </div>
      <p className="text-graphic">Chiffre recueilli sur 100 personnes</p>
      <p className="title-graphics">
        Répartition des personnes en situation de handicap au sein des
        entreprises :
      </p>
      <div className="graphic-container">
        <PieChart2 />
      </div>
      <p className="text-graphic">Chiffre recueilli sur 100 personnes</p>
      <p className="title-graphics">
        Avez vous déjà subi de la discrimination au travail (global) ?
      </p>
      <div className="graphic-container">
        <PieChart3 />
      </div>
      <p className="text-graphic">Chiffre recueilli sur 100 personnes</p>
      <p className="title-graphics">
        Répartition des genres dans les entreprises :
      </p>
      <div className="graphic-container">
        <PieChart4 />
      </div>
      <p className="text-graphic">Chiffre recueilli sur 100 personnes</p>
      <div className="graphic-container">
        <PieChartH />
      </div>
    </div>
  );
}

export default Ressources;
