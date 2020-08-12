import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navibar from './components/nav';
import Posts from './components/Posts'
import Page from './components/Page'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import FourOFour from './components/404'
import Sidebar from './components/Sidebar'
import Row from 'react-bootstrap/Row'


function App() {

  return (
    <div className="app-wrapper" style={{ minHeight: '100vh' }}>
      <Navibar />
      <Row className="content-row">
      <Sidebar/>
      <Switch>
        <Route path="/category/:title" exact component={Posts} />
        <Route path="/category/:title/page=:pageNum" exact component={Posts} />
        <Route path="/tag/:tag" exact component={Posts} />
        <Route path="/archive/:year/:month" exact component={Posts} />
        <Route path="/:post/:id/" exact component={Posts} />
        <Route path="/page=:blogPage" exact component={Posts} />
        <Route path="/:id/" exact component={Page} />
        <Route path="/" exact component={Homepage} />
        <Route component={FourOFour} />
      </Switch>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
