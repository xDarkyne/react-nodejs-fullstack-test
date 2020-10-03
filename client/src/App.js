import React, { useState, useEffect } from 'react';
import projectService from './services/projectService';
import logo from './logo.svg';
import './App.css';

function App() {
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
  };

  return (
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
        <ul className="list">
        {(projects && projects.length > 0) ? (
          projects.map(project => renderProject(project))
        ) : (
          <p>No project found</p>
        )}
      </ul>
      </header>
    </div>
  );
}

export default App;
