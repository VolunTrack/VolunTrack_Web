import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">VolunTrack Org.</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/history">Our History</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="search-section">
          <h1>Search Volunteers</h1>
          <input type="text" placeholder="Search" />
          <p>Recommended: Events, Organizations, Cities</p>
        </div>
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
      </main>
      <footer>
        <div className="social-links">
          <a href="https://www.instagram.com/voluntrack/"><img src="/assets/instagram-logo.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/voluntrackm"><img src="assets\linkedin-logo.png" alt="LinkedIn" /></a>
          <a href="https://github.com/VolunTrack"><img src="assets/github-logo.png" alt="GitHub" /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
