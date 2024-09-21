// ResultDetails.js
import React from 'react';
import './../styles/ResultDetails.css';

const ResultDetails = ({ result }) => {
  return (
    <div className="result-details-content">
      <h2>{result.name}</h2>
      <p><strong>Organization:</strong> {result.organization}</p>
      <p><strong>City:</strong> {result.city}</p>
      <p><strong>Description:</strong></p>
      <p>{result.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ResultDetails;
