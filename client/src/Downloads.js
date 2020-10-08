import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,
    NavLink,
    Route,
    Switch } from 'react-router-dom';
import logo from './logo.svg';
import './scss/app.scss';
import App from './App';

function Downloads() {
    return (
        <div>
            <nav className="SecondaryNav">
                <ul>
                    <li>
                        {/* new router is not neccessary only NavLinks are required for further
                            routing. Add sub-routes here. */}
                        <NavLink to='/downloads/zips' exact>Zips</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="App">
                <header className="App-header">
                    <h1>Zips</h1>
                </header>
            </div>

            <div className="App">
                <header className="App-header">
                    <h1>Zips</h1>
                </header>
            </div>

            <div className="App" id="nice">
                <header className="App-header">
                    <h1>Zips</h1>
                </header>
            </div>
        </div>
    );
}

export default Downloads;