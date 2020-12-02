import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Alphabetical from "./pages/Alphabetical"
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alphabetical">Alphabetical</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/job">Job</a>
          </li>
          
        </ul>
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/alphabetical" component ={Alphabetical} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
