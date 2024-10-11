// **page.jsx** (Minimal changes to pass the updated values)
"use client";
import { useState } from "react";
import LanguageCard from '../../components/LanguageCard';
import QuickStatistics from '../../components/QuickStatistics';
import ComparisonGraph from '../../components/ComparisonGraph';
import SyllabusWiseAnalysis from '../../components/SyllabusWiseAnalysis';
import QuestionAnalysis from '../../components/QuestionAnalysis';
import '../../styles/SkillTestPage.css'; 

export default function SkillTestPage() {
  const [rank, setRank] = useState(1); // **Initial state**
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const handleUpdate = (newRank, newPercentile, newScore) => {
    setRank(newRank); // **Update rank**
    setPercentile(newPercentile); // **Update percentile**
    setScore(newScore); // **Update score**
  };

  return (
    <div className="skill-test-container">
      {/* Left Column */}
      <div className="left-column">
        <LanguageCard onUpdate={handleUpdate} /> {/* **Pass the update handler** */}
        <QuickStatistics rank={rank} percentile={percentile} score={score} /> {/* **Pass updated values** */}
        <ComparisonGraph percentile={percentile} /> {/* **Pass updated values** */}
      </div>
      {/* Right Column */}
      <div className="right-column">
        <SyllabusWiseAnalysis />
        <QuestionAnalysis score={score} totalQuestions={15} />{/* **Pass updated score** */}
      </div>
    </div>
  );
}
