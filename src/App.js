import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import SearchScreen from './SearchScreen';
import logo from './assets/adaptive-icon-cropped.png';
import instagramLogo from './assets/instagram-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import githubLogo from './assets/github-logo.png';

const Home = ({ handleSearchSubmit }) => (
  <div>
    <div className="search-section">
      <h1>Search Volunteers</h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      <p>Recommended: Events, Organizations, Cities</p>
    </div>
    <div className="full-width">
      <div className="categories">
        <div className="category">
          <h2>Community Life</h2>
          <div className="subcategory">
            <h3>Support</h3>
            <ul>
              <li>Peer Support</li>
              <li>Youth</li>
              <li>Seniors</li>
              <li>Settlement</li>
              <li>Newcomers</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Culture</h3>
            <ul>
              <li>Culture</li>
              <li>Religion</li>
              <li>Arts</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Assistance</h3>
            <ul>
              <li>Fundraising</li>
              <li>Food</li>
              <li>Accessibility</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div className="category">
          <h2>Personal Growth</h2>
          <div className="subcategory">
            <h3>Learning</h3>
            <ul>
              <li>Teaching</li>
              <li>Education</li>
              <li>Literacy</li>
              <li>Writing</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Leadership</h3>
            <ul>
              <li>Leadership</li>
              <li>Communication</li>
              <li>Public Speaking</li>
              <li>IT Support</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Development</h3>
            <ul>
              <li>Career Development</li>
              <li>Critical Thinking</li>
              <li>Finance</li>
              <li>Health</li>
            </ul>
          </div>
        </div>
        <div className="category">
          <h2>Work and Environment</h2>
          <div className="subcategory">
            <h3>Conservation</h3>
            <ul>
              <li>Environment</li>
              <li>Animals</li>
              <li>Recycling</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Maintenance</h3>
            <ul>
              <li>Trades</li>
              <li>Facilities</li>
              <li>Gardening</li>
              <li>Repairs</li>
            </ul>
          </div>
          <div className="subcategory">
            <h3>Sustainability</h3>
            <ul>
              <li>Green Initiatives</li>
              <li>Renewable Energy</li>
              <li>Urban Farming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    navigate(`/search?term=${term}`);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" style={{width: 60}}/>
          <div>VolunTrack Org.</div>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/history">Our History</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home handleSearchSubmit={handleSearchSubmit} />} />
          <Route path="/search" element={<SearchScreen searchTerm={searchTerm} />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/voluntrack/">
            <img src={instagramLogo} alt="Instagram" style={{width: 25}}/>
          </a>
          <a href="https://www.linkedin.com/company/voluntrackm">
            <img src={linkedinLogo} alt="LinkedIn" style={{width: 25}}/>
          </a>
          <a href="https://github.com/VolunTrack">
            <img src={githubLogo} alt="GitHub" style={{width: 25}}/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
