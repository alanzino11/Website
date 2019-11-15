import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from './Header';
import SiteForm from './SiteForm';

function App() {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/SiteForm">SiteForm</NavLink></li>
        </ul>
      </div>
      <div className="content">
        <Route path="/" component={Header}/>
        <Route path="/SiteForm" component={SiteForm}/>
      </div>
    </HashRouter>
  );
}

export default App;
