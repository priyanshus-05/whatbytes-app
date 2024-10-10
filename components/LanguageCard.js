// **LanguageCard.js**
"use client";
import { useState } from "react";
import UpdateModal from './UpdateModal'; // **Import the modal component**

export default function LanguageCard({ onUpdate }) { 
  const [isModalOpen, setModalOpen] = useState(false); // **State for modal**

  // ** Open modal **
  const openModal = () => {
    setModalOpen(true);
  };

  // ** Close modal **
  const closeModal = () => {
    setModalOpen(false);
  };

  // ** Handle form submission and save the updated data **
  const handleSave = (rank, percentile, score) => {
    onUpdate(rank, percentile, score); // **Send updated values back to parent**
    console.log('Updated Rank:', rank);
    console.log('Updated Percentile:', percentile);
    console.log('Updated Score:', score);
    closeModal(); // **Close modal after saving**
  };

  return (
    <div className="language-card">
      <div className="language-card-content">
        <img src="/html-5.png" alt="HTML Icon" className="language-icon" />
        <div className="language-details">
          <h3>Hyper Text Markup Language</h3>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
      </div>
      <button className="update-button" onClick={openModal}>Update</button> {/* **Open modal** */}
      
      {/* **Render modal when state is true** */}
      {isModalOpen && (
        <UpdateModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSave={handleSave} 
        />
      )}
    </div>
  );
}
