import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';

export default function QuestionAnalysis({ score = 10, totalQuestions = 15 }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calcPercentage = (score / totalQuestions) * 100;
    setPercentage(calcPercentage);
  }, [score, totalQuestions]);

  return (
    <div className="question-analysis">
      <h3>Question Analysis</h3>
      <p>
        You scored <strong>{score} question correct</strong> out of <strong>{totalQuestions}</strong>.
        However it still needs some improvements.
      </p>
      <div className="circular-progress-container" style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          className="CircularProgressbar" // Add this className
          value={percentage}
          text={`${score}/${totalQuestions}`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: '#3498db',
            trailColor: '#d6d6d6',
            strokeLinecap: 'butt',
          })}
        />
      </div>
    </div>
  );
}
