import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,
  NavLink,
  Route,
  Switch } from 'react-router-dom';
/* import projectService from './services/projectService'; */
import logo from './logo.svg';
import './scss/app.scss';

import Downloads from './Downloads';

function App() {
  const [count, setCount] = useState(0);
  /*
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
  };*/

  return (
    <Router>
      <div>
        <nav className="PrimaryNav">
          <ul>
            <li>
              <NavLink to="/" activeClassName="activeNav" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="activeNav" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/downloads" activeClassName="activeNav" exact>Downloads</NavLink>
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

          <Route path='/about' exact>
            <div className="App">
              <header className="App-header">
                <h1>About</h1>  
              </header>
            </div>
          </Route>

          <Route path='/downloads' exact>
            <Router>
              <div>
                <nav className="SecondaryNav">
                  <ul>
                    <li>
                      <NavLink to='/downloads' activeClassName="activeNav" exact>Overview</NavLink>
                    </li>
                    <li>
                      <NavLink to='/downloads/file' activeClassName="activeNav" exact>File 1</NavLink>
                    </li>
                    <li>
                      <NavLink to='/downloads/zip' activeClassName="activeNav" exact>Zip</NavLink>
                    </li>
                  </ul>
                </nav>

                <Switch>
                  <Route path='/downloads' exact>
                    <Downloads />
                    <div className="App">
                      <header className="App-header">
                        <h1>Overview</h1>
                      </header>
                    </div>
                  </Route>

                  <Route path='/downloads/file' exact>
                    <div className="App">
                      <header className="App-header">
                        <h1>File 1</h1>
                      </header>
                    </div>
                  </Route>

                  <Route path='/downloads/zip' exact>
                    <div className="App">
                      <header className="App-header">
                        <h1>Zip Archive</h1>
                      </header>
                    </div>
                  </Route>
                </Switch>
              </div>
            </Router>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
