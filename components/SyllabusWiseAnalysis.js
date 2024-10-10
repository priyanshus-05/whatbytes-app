// components/SyllabusWiseAnalysis.jsx
export default function SyllabusWiseAnalysis() {
    return (
      <div className="syllabus-wise-analysis">
        <h3>Syllabus Wise Analysis</h3>
        <div className="progress-bar">
          <div className="label">
            <span>HTML Tools, Forms, History</span>
            <span className="percentage">80%</span> {/* * Percentage added */}
          </div>
          <div className="progress-bar-fill" style={{ width: '80%', backgroundColor: '#007bff' }}></div> {/* * Updated to a colored bar */}
        </div>
        <div className="progress-bar">
          <div className="label">
            <span>Tags & References in HTML</span>
            <span className="percentage">60%</span> {/* * Percentage added */}
          </div>
          <div className="progress-bar-fill" style={{ width: '60%', backgroundColor: '#fd7e14' }}></div> {/* * Updated to a colored bar */}
        </div>
        <div className="progress-bar">
          <div className="label">
            <span>Tables & References in HTML</span>
            <span className="percentage">24%</span> {/* * Percentage added */}
          </div>
          <div className="progress-bar-fill" style={{ width: '24%', backgroundColor: '#dc3545' }}></div> {/* * Updated to a colored bar */}
        </div>
        <div className="progress-bar">
          <div className="label">
            <span>Tables & CSS Basics</span>
            <span className="percentage">96%</span> {/* * Percentage added */}
          </div>
          <div className="progress-bar-fill" style={{ width: '96%', backgroundColor: '#28a745' }}></div> {/* * Updated to a colored bar */}
        </div>
      </div>
    );
  }
  