import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/SearchScreen.css';
import useResults from './hooks/useResults';
import SearchList from './components/SearchList';

const SearchScreen = ({ searchTerm }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTerm = query.get('term') || searchTerm;
  const [term, setTerm] = useState(initialTerm);
  const [searchApi, results, errorMessage] = useResults();

  useEffect(() => {
    if (term) {
      searchApi(term);
    }
  }, [term, searchApi]);

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      navigate(`?term=${term}`);
      searchApi(term);
    }
  };

  return (
    <div className='page'>
      <div className="container">
        <div className="search-section">
          <form onSubmit={handleSearchSubmit}>
            <h3>Showing Results for</h3>
            <input 
              type="text" 
              value={term} 
              onChange={handleInputChange} 
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <SearchList results={results} term={term} />

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SearchScreen;
