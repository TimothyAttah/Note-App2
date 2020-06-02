import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import HomePage from './components/Homepage/HomePage';
import LoginModal from './components/Homepage/HomePageModal/LoginModal';
import SignUpModal from './components/Homepage/HomePageModal/SignUpModal';
import SecondPage from './components/SecondPage/SecondPage';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={ HomePage } />
          <Route path="/login" component={ LoginModal } />
          <Route path="/sign_up" component={ SignUpModal } />
          <Route path="/dash/note" component={ SecondPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;