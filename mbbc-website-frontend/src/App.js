import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DocStatementPage from "./pages/DocStatementPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/statement-of-faith" component={DocStatementPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
