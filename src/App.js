import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import ErrorPage from './views/ErrorPage';
import Navbar from './views/Navbar';
import ProjectsApps from './components/ProjectsApps';
import ProjectGames from './components/ProjectsGames';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />}>
          <Route path="games" element={<ProjectGames />} />
          <Route path="apps" element={<ProjectsApps />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
