// Ressources.jsx
import PieChart from "../components/PieChart"; // Assurez-vous que le chemin est correct

function Ressources() {
  return (
    <div className="ressources-container">
      <h1>Ressources des Data Analyst</h1>
      <p>Discrimination basé sur :</p>
      <div className="graphic-container">
        <PieChart />
      </div>
      <p className="text-graphic">Chiffre recueilli sur 1000 personnes</p>
    </div>
  );
}

export default Ressources;
