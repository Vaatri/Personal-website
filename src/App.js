import './App.css';
import EntryPage from './pages/EntryPage';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ProjectLinks from './pages/ProjectLinks';

function App() {
  return (
    <Router>
      <EntryPage />
      <AboutMe />
      <ProjectLinks />
    </Router>
  );
}

export default App;
