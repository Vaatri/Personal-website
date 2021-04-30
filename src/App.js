import './App.css';
import EntryPage from './pages/EntryPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ProjectLinks from './pages/ProjectLinks';
import React from 'react';
import ExtracurricularPage from './pages/ExtracurricularPage';
import BaliExpressPage from './pages/BaliExpressPage';
import Footer from './pages/Footer';

function App() {
  React.useEffect(() => {
    document.title = "Van-Roy Trinh";
  },[]);
  
  return (
    <Router>
      <Switch>
        <Route path="/Personal-website">
          <EntryPage />
          <AboutMe />
          <ProjectLinks />
          <ExtracurricularPage />
          <Footer />
        </Route>
        <Route path="/baliexpress">
            <BaliExpressPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
