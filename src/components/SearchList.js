// SearchList.js
import React from 'react';
import './../styles/SearchList.css';

const SearchList = ({ results = [], term, onResultClick, selectedResultId }) => {
  const filteredResults = results.filter(result => 
    result.name.toLowerCase().includes(term.toLowerCase()) ||
    (result.city && result.city.toLowerCase().includes(term.toLowerCase())) ||
    (result.organization && result.organization.toLowerCase().includes(term.toLowerCase()))
  );

  return (
    <div className="results-list">
      {filteredResults.length > 0 ? (
        filteredResults.map(result => {
          const city = result.city || (result.location && result.location.city) || 'Unknown City';

          return (
            <div 
              key={result.id} 
              className={`result-item ${result.id === selectedResultId ? 'selected' : ''}`} 
              onClick={() => onResultClick(result)}
            >
              <h3>{result.name}</h3>
              <p><strong>Organization:</strong> {result.organization}</p>
              <a className="location-info">{city} | {result.categories}</a>
              <p className="description">{result.description}</p>
            </div>
          );
        })
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

export default SearchList;
