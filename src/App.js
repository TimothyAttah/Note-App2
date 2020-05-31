import React from 'react';
import { Router, Route } from 'react-router-dom'
import history from './history'
import HomePage from './components/Homepage/HomePage'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route>
            <HomePage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;