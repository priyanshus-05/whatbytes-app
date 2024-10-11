"use client";

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
        data: [5, 20, 50, 20, 5], // Adjusted to create a bell curve shape
        borderColor: 'rgba(128, 90, 213, 1)', // Adjusted to match the purple in the image
        backgroundColor: 'rgba(128, 90, 213, 0.1)',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'rgba(128, 90, 213, 1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        pointStyle: 'circle',
      },
    },
  };

  return (
    <div className="comparison-graph-container">
      <h3>Comparison Graph</h3>
      <p>
        You scored <strong>{percentile}% percentile</strong> which is lower than the
        average percentile 72% of all the engineers who took this assessment
      </p>

      <div style={{ position: 'relative', height: '200px', marginTop: '20px' }}>
        <Line data={data} options={options} />
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: `${percentile}%`, 
            height: '100%', 
            borderLeft: '1px solid black',
            pointerEvents: 'none'
          }}
        >
          <span style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            left: '5px', 
            fontSize: '12px',
            whiteSpace: 'nowrap'
          }}>
            your percentile
          </span>
        </div>
      </div>
    </div>
  );
}