import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navibar from './components/nav';
import Posts from './components/Posts'
import Page from './components/Page'
import Stylesheets from './assets/Stylesheets'
import Footer from './components/Footer'
import Homepage from './components/Homepage'



function App() { 

  return (
    <div className="app-wrapper page">
      <Router>
        <Navibar />
        <Switch>
          <Route path="/category/:title" exact component={Posts} />
          <Route path="/category/:title/page=:pageNum" exact component={Posts} />
          <Route path="/tag/:tag" exact component={Posts} />
          <Route path="/archive/:year/:month" exact component={Posts} />
          <Route path="/:post/:id/" exact component={Posts} />
          <Route path="/blog/" exact component={Page} />
          <Route path="/page=:blogPage" exact component={Posts} />
          <Route path="/:id/" exact component={Page} />
          <Route path="/" exact component={Homepage} />
        </Switch>
        <Footer />
      </Router>
      <Stylesheets />
    </div>
  );
}

export default App;
