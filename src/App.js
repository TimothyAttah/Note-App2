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
import MyTodos from './components/NavPages/Todos/MyTodos';
import MyEvents from './components/NavPages/Events/MyEvents';
import Archive from './components/NavPages/Archive/Archive';
import Settings from './components/NavPages/Setting/Settings';

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
          <Route path="/note/todos" component={ MyTodos } />
          <Route path="/note/events" component={ MyEvents } />
          <Route path="/note/archive" component={ Archive } />
          <Route path="/note/setting" component={ Settings} />
        </div>
      </Router>
    </div>
  );
}

export default App;