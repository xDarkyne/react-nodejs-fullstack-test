import React, { useState, useEffect } from 'react';
/*  BrowserRouter, NavLink, Route and Switch from react-router-dom
    are the most basic tools to use react-router effectively
    Link can be used instead of NavLink but Link does not support a
    activeClassName attribute which sets styling if this path is active
    e.g in a navbar with the elements home, shop and about shop can be
    set to a red color while we are in the shop path or sub-paths */
import {BrowserRouter as Router,
  NavLink,
  Route,
  Switch } from 'react-router-dom';
/* import projectService from './services/projectService'; */
import logo from './logo.svg';
import './scss/app.scss';

import Downloads from './Downloads';
import Zips from './Zips';

function App() {
  const [count, setCount] = useState(0);
  /*
  
  Code below is commented out because the database
  is not available from my remote workplace.

  const [projects, setprojects] = useState(null);

  useEffect(() => {
    if (!projects) {
      getProjects();
    }
  });

  const getProjects = async() => {
    let res = await projectService.getAll();
    setprojects(res);
  }

  const renderProject = project => {
    return (
      <li key={project.id} className="list__item project">
        <h3 className="product__name">{project.name}</h3>
        <p className="product__description">{project.descript}</p>
        <a className="App-link" href={project.github}>Link</a>
      </li>
    );
  };  */


  /*
    Renders navbar first with NavLinks to different components
    then renders the main contents of this component (contents should
      probably be transfered to a seperate component). 
   */
  return (
    <Router>
      <nav className="PrimaryNav">
          <ul>
            <li>
              {/* root path (to='/') should be exact. */}
              <NavLink exact to="/" activeClassName="activeNav">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="activeNav">About</NavLink>
            </li>
            <li>
              <NavLink to='/downloads' activeClassName="activeNav">Downloads</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>

                <h1>You clicked {count} times!</h1>
                <button onClick={() => setCount(count + 1)}>Click me</button>

                <ul className="list">
                  { /*(projects && projects.length > 0) ? (
                    projects.map(project => renderProject(project))
                  ) : (
                    <p>No project found</p>
                  ) */}
                </ul>
              </header>
            </div>
          </Route>

          {/* Paths that aren't the root path ( domain.com/ ) should not be exact */}
          <Route path='/about'>
            <div className="App">
              <header className="App-header">
                <h1>About</h1>  
              </header>
            </div>
          </Route>

          {/* Pages should be contained within their own component (component.js file) to simplify
              Route definitions. See the line below for a simple Route */}
          <Route path='/downloads' component={ Downloads } />
        </Switch>
    </Router>
  );
}

export default App;
