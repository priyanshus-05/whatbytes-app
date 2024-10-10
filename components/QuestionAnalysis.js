"use client";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; // * Import CircularProgressbar
import 'react-circular-progressbar/dist/styles.css'; // * Import styles for the circular progress bar
import { useState, useEffect } from 'react'; // * Added for dynamic updates

export default function QuestionAnalysis({ score = 10, totalQuestions = 15 }) {
  const [percentage, setPercentage] = useState(0); // * Dynamic percentage state

  useEffect(() => {
    const calcPercentage = (score / totalQuestions) * 100;
    setPercentage(calcPercentage); // * Dynamically calculate percentage
  }, [score, totalQuestions]);

  return (
    <div className="question-analysis">
      <h3>Question Analysis</h3>
      <p>
        You scored <strong>{score} question correct</strong> out of <strong>{totalQuestions}</strong>.
        However it still needs some improvements.
      </p>
      {/* * Circular progress bar with a target icon in the middle */}
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${score}/${totalQuestions}`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: '#3498db', // * Blue color for the circular path
            trailColor: '#d6d6d6', // * Light grey for background trail
            strokeLinecap: 'butt', // * Flat ends for the path
          })}
        />
      </div>
      {/* * Target icon in the middle */}
      {/* <div className="target-icon">
        <img src="/target-icon.png" alt="Target" width="40" height="40" style={{ position: 'absolute', top: '30px', left: '30px' }} />
      </div> */}
    </div>
  );
}
