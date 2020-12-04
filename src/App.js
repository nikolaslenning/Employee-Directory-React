import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Sort from "./pages/Sort"
import Home from "./pages/Home"
import Filter from "./pages/Filter"
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sort">Alphabetize</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/filter">Search</a>
          </li>
          
        </ul>
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/sort" component ={Sort} />
          <Route exact path="/filter" component ={Filter} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
