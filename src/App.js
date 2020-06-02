import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import HomePage from './components/Homepage/HomePage';
import LoginModal from './components/Homepage/HomePageModal/LoginModal';
import SignUpModal from './components/Homepage/HomePageModal/SignUpModal';
import SecondPage from './components/SecondPage/SecondPage';
import CreateNoteModal from './components/SecondPage/SecondPageModal/CreateNoteModal';
import DeleteModal from './components/SecondPage/SecondPageModal/DeleteModal';
import EditModal from './components/SecondPage/SecondPageModal/EditModal';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={ HomePage } />
          <Route path="/login" component={ LoginModal } />
          <Route path="/sign_up" component={ SignUpModal } />
          <Route path="/dash/note" component={ SecondPage } />
          <Route path="/create/note" component={ CreateNoteModal } />
          <Route path="/delete/note" component={ DeleteModal } />
          <Route path="/edit/note" component={ EditModal } />
        </div>
      </Router>
    </div>
  );
}

export default App;