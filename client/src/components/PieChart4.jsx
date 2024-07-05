// PieChart.jsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les éléments utilisés de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Déclaration de fonction
function PieChart() {
  const data = {
    labels: [
      "Hommes",
      "Femmes",
      "Transgenres",
      "Non-binaires",
      "Ne se prononce pas",
    ],
    datasets: [
      {
        data: [59, 34, 1, 1, 5],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#73C2BE",
          "#E58F65",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#73C2BE",
          "#E58F65",
        ],
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
