// QuickStatistics.js
"use client";
import { FaTrophy, FaClipboard, FaCheckCircle } from 'react-icons/fa';

export default function QuickStatistics({ rank, percentile, score }) { // ** Accept props **
  return (
    <div className="quick-statistics">
      <h3 className="quick-statistics-title">Quick Statistics</h3>
      <div className="statistics-items">
        <div className="stat-item">
          <FaTrophy className="stat-icon" />
          <div>
            <p>{rank}</p> {/* ** Updated rank ** */}
            <span>YOUR RANK</span>
          </div>
        </div>
        <div className="stat-item">
          <FaClipboard className="stat-icon" />
          <div>
            <p>{percentile}%</p> {/* ** Updated percentile ** */}
            <span>PERCENTILE</span>
          </div>
        </div>
        <div className="stat-item">
          <FaCheckCircle className="stat-icon" />
          <div>
            <p>{score} / 15</p> {/* ** Updated correctAnswers ** */}
            <span>CORRECT ANSWERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
