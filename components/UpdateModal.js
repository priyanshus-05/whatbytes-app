// **UpdateModal.js**
"use client";
import React, { useState } from 'react';

const UpdateModal = ({ isOpen, onClose, onSave }) => { // **Make sure onClose is passed correctly here**
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState('');
  const [score, setScore] = useState(10);

  const onSubmit = (e) => {
    e.preventDefault();
    if (percentile < 0 || percentile > 100 || !percentile) {
      alert('Percentile should be between 0 and 100.');
      return;
    }
    onSave(rank, percentile, score); // **Call onSave**
    onClose(); // **Close modal after saving**
  };

  if (!isOpen) return null; // **If modal is not open, don't render it**

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Update scores</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <div className="modal-input-group">
            <label>1 <span className="label-text">Update your Rank</span></label>
            <input 
              type="number" 
              value={rank} 
              onChange={(e) => setRank(e.target.value)} 
              className="modal-input"
            />
          </div>
          
          <div className="modal-input-group">
            <label>2 <span className="label-text">Update your Percentile</span></label>
            <input 
              type="number" 
              value={percentile} 
              onChange={(e) => setPercentile(e.target.value)} 
              className="modal-input"
              placeholder="Percentile (0-100)" 
              required
            />
            {percentile && (percentile < 0 || percentile > 100) && (
              <p className="error-text">Percentile should be between 0 and 100.</p>
            )}
          </div>

          <div className="modal-input-group">
            <label>3 <span className="label-text">Update your Current Score (out of 15)</span></label>
            <input 
              type="number" 
              value={score} 
              onChange={(e) => setScore(e.target.value)} 
              className="modal-input"
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" className="modal-save-btn">Save →</button>
            {/* **Close modal when clicking cancel** */}
            <button type="button" onClick={onClose} className="modal-cancel-btn">Cancel</button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
