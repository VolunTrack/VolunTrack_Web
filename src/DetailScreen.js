// ResultDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/DetailScreen.css';

const DetailScreen = ({ results }) => {
  const { id } = useParams();
  const result = results.find(result => result.id === id);
  console.log(results);

  if (!result) {
    return <div>Result not found</div>;
  }

  return (
    <div className="result-details">
      <h2>{result.name}</h2>
      <p><strong>Organization:</strong> {result.organization}</p>
      <p><strong>City:</strong> {result.city}</p>
      <p><strong>Categories:</strong> {result.categories}</p>
      <p><strong>Description:</strong> {result.description}</p>
    </div>
  );
};

export default DetailScreen;
