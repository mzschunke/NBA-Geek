import React from "react";
import { Bar } from "react-chartjs-2";
import {} from "chart.js/auto";

export default function BarChart({ chartData, barSelection }) {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
          text: `${barSelection}`,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
