// PieChart.jsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les éléments utilisés de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Déclaration de fonction
function PieChart() {
  const data = {
    labels: ["Non", "Oui"],
    datasets: [
      {
        data: [91, 9],
        backgroundColor: ["#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#FFCE56", "#FF6384"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
