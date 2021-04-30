import './App.css';
import EntryPage from './pages/EntryPage';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ProjectLinks from './pages/ProjectLinks';
import React from 'react';

function App() {
  React.useEffect(() => {
    document.title = "Van-Roy Trinh";
  },[]);
  
  return (
    <Router>
      <EntryPage />
      <AboutMe />
      <ProjectLinks />
    </Router>
  );
}

export default App;
