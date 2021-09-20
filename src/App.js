import "./App.css";
import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import CompanyDetails from "./components/CompanyDetails";
import Favourites from "./components/Favourites";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1> 🚪 Open Doors </h1>

        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/:companyName" component={CompanyDetails} />
          <Route exact path="/jobs" component={Favourites} />
        </Switch>
      </Router>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,128L180,256L360,96L540,192L720,256L900,224L1080,160L1260,288L1440,192L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default App;
