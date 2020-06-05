import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import './home.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <Header />
        <FirstSection />
        <SecondSection />
        <div className="btnPage">
          <Link to="/dash/note" className="mylinks">
            <button id="get-started-btn">Get Started</button>
          </Link>
        </div>
        <div>
          <footer>
            <p>All Right Reserved. 2020 @Timothy Attah</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;