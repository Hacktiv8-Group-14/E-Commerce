import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data1 = [0, 10, 5, 2, 20, 30, 45];
const data2 = [15, 50, 15, 35, 20, 10, 5];

// const data = {[

// ]}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graphic() {
  const [dataset, setData] = useState({
    label: labels,
    data1: data1,
    data2: data2,
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const data = {
    labels: dataset.label,
    datasets: [
      {
        label: "Sales",
        data: dataset.data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Products Sold",
        data: dataset.data2,
        borderColor: "#0a213a",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div id="graphic" className="w-full md:w-3/4 p-3 border rounded-lg mr-3">
      <Line options={options} data={data} />
    </div>
  );
}
