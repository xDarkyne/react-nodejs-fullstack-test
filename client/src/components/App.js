import React, { useState, useEffect } from 'react';
import projectService from '../services/projectService';
import '../scss/main.scss';

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
    <div className="comp-root">
      <div className="inner">
        <header className="App-header">
          <h1 className="App-Title">Discover my projects</h1>
        </header>
        <ul className="list">
            {(projects && projects.length > 0) ? (
              projects.map(project => renderProject(project))
            ) : (
              <p>No project found</p>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
