"use client"; // * Ensures this runs on the client side

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale, // * Required for X-axis
  LinearScale, // * Required for Y-axis
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// * Register the components for the chart
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function ComparisonGraph({ percentile }) {
  const data = {
    labels: [0, 25, 50, 75, 100],
    datasets: [
      {
        label: 'Number of Students',
        data: [10, 30, 50, 70, 90], // Dummy data, update as per requirement
        borderColor: 'rgba(119, 83, 170, 1)', // * Changed the line color to match example
        backgroundColor: 'rgba(119, 83, 170, 0.2)', // * Adjusted background for line area
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: 'purple', // * Customized point color
        fill: false,
        tension: 0.4, // * This makes the line slightly curved
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // * Hide the legend to match the reference image
      },
    },
    elements: {
      line: {
        borderWidth: 2, // * Adjust the line thickness
      },
      point: {
        pointStyle: 'circle', // * Define point style as circle
      },
    },
  };

  return (
    <div className="comparison-graph-container" style={{ position: 'relative' }}>
      {/* Title and Graph Description */}
      <h3>Comparison Graph</h3>
      <p>
      <strong>You scored {percentile}% percentile</strong> which is lower than the
      average percentile 72% of all the engineers who took this assessment.
      </p>

      {/* Render the Line Chart */}
      <Line data={data} options={options} />

      {/* Graph Icon */}
      {/* <div className="comparison-graph-icon" style={{ position: 'absolute', top: 10, right: 10 }}>
        <img src="/chart.png" alt="Graph Icon" />
      </div> */}
    </div>
  );
}
