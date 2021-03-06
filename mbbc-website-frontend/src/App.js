import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DocStatementPage from "./pages/DocStatementPage";
import BlogListPage from "./pages/BlogListPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import DonatePage from "./pages/DonatePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/statement-of-faith" component={DocStatementPage} />
            <Route path="/blog" component={BlogListPage} />
            <Route path="/blog-article/:name" component={BlogArticlePage} />
            <Route path="/donate" component={DonatePage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
