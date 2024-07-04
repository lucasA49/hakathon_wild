// PieChart.jsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les éléments utilisés de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Déclaration de fonction
function PieChart() {
  const data = {
    labels: [
      "Raciale ou ethnique",
      "Le sexe ou le genre",
      "L'âge",
      "Une situation de handicap",
      "La religion ou les croyances",
      "L'orientation sexuelle",
    ],
    datasets: [
      {
        data: [300, 50, 100, 75, 150, 200],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Positionner la légende en bas
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
