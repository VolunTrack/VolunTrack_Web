import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/SearchScreen.css';
import useResults from './hooks/useResults';
import SearchList from './components/SearchList';
import SearchIcon from './assets/SearchIcon.png';

const SearchScreen = ({ searchTerm, results }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const initialTerm = query.get('term') || searchTerm;
  const [term, setTerm] = useState(initialTerm);
  const [searchApi, fetchedResults, errorMessage] = useResults();

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
            <h3>Search Results for</h3>
            <input 
              type="text" 
              value={term} 
              onChange={handleInputChange} 
            />
            <div className="search-icon" onClick={handleSearchSubmit}>
              <img src={SearchIcon} alt="Search" />
            </div>
          </form>
        </div>

        <SearchList results={fetchedResults.length > 0 ? fetchedResults : results} term={term} />

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SearchScreen;
