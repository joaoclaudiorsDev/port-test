import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcomepage/Welcome';
import Navigation from './components/Navigation';
import AboutMe from './pages/aboutme/AboutMe';
import ProjectsPage from './pages/Projects';

function App () {
  return (
    <Routes>
      <Route element={ <Navigation /> }>
        <Route path="/" element={ <WelcomePage /> } />
        <Route path="/about-me" element={ <AboutMe /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
