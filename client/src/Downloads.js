import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
    } from 'react-router-dom';
import logo from './logo.svg';
import './scss/app.scss';
import App from './App';
import Zips from './Zips';

function Downloads() {
    {/* for Routers that aren't withing your root component (App.js) use
        basename attribute to set new root-path in this case root for this
        component is /downloads */}
    return (
        <Router basename="/downloads">
            <nav class="SecondaryNav">
                <ul>
                    <li>
                        {/* /downloads does not have to be included in path because basename is set
                            so /zips will equal /downloads/zips in browser. */}
                        <NavLink exact to='/' activeClassName="activeNav">Overview</NavLink>
                    </li>
                    <li>
                        <NavLink to='/zips' activeClassName="activeNav">Zips</NavLink>
                    </li>
                    <li>
                        <NavLink to='/files' activeClassName="activeNav">Files</NavLink>
                    </li>
                </ul>
            </nav>

            {/* root path (/) should be exact again whilst other routes are not exact */}
            <Switch>
                <Route path='/' exact>
                    <div className="App">
                        <header className="App-header">
                            <h1>Select a topic.</h1>
                        </header>
                    </div>
                </Route>

                <Route path='/zips'>
                    <Zips />
                </Route>

                <Route path='/files'>
                    <div className="App">
                        <header className="App-header">
                            <h1>Files here</h1>
                        </header>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Downloads;