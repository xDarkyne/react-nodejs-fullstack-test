import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
Switch,
Route,
Link,
NavLink,
Redirect,
useHistory,
useLocation } from 'react-router-dom';
import './scss/main.scss';
import App from './components/App';
import About from './components/About';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
              </li>
              
              <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
