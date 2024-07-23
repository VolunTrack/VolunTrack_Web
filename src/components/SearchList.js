import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './../styles/SearchList.css';

const truncateText = (text, maxLines) => {
  const element = document.createElement('div');
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';
  element.style.lineHeight = '1.5em'; // Adjust according to your CSS
  element.style.webkitBoxOrient = 'vertical';
  element.style.webkitLineClamp = maxLines;
  element.style.overflow = 'hidden';
  element.innerText = text;

  document.body.appendChild(element);
  const truncatedText = element.clientHeight > element.style.lineHeight * maxLines ? `${text.split(' ').slice(0, maxLines * 10).join(' ')}...` : text;
  document.body.removeChild(element);

  return truncatedText;
};

const SearchList = ({ results = [], term }) => {
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
          const truncatedDescription = truncateText(result.description, 3); // Adjust the number of lines

          return (
            <div key={result.id} className="result-item">
              <h3>
                <Link to={`/result/${result.id}`}>{result.name}</Link>
              </h3>
              <p><strong>Organization:</strong> {result.organization}</p>
              <a className="location-info">{city} | {result.categories}</a>
              <p className="description">{truncatedDescription}</p>
            </div>
          );
        })
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

SearchList.propTypes = {
  results: PropTypes.array,
  term: PropTypes.string.isRequired
};

export default SearchList;
