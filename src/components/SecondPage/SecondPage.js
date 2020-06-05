import React from 'react';
import Header from './Header';
import Nav from './Nav';
import SideBar from './SideBar';
import Content from './Content';
import ContentModal from './ContentModal';
import './secondPage.css';

const SecondPage = () => {
    return (
      <div id="main-container2">
        <Header />
        <nav>
          <Nav />
        </nav>
        <div id="main-content-wrapper">
          <section id="second-sectionPage">
            <SideBar />
            <div id="second-section-wrapper">
              <Content />
              <ContentModal />
            </div>
          </section>
        </div>
      </div>
    );
  }

export default SecondPage;

