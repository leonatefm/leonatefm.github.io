import './App.scss';
import React from 'react';
import AboutPage from './pages/about';
import Footer from 'components/Footer';
import HomePage from './pages/home';
import PhotographPage from './pages/photograph';
import ProjectsPage from './pages/projects';

function App() {
  return (
    <div className='App'>
      <HomePage />
      <ProjectsPage />
      <PhotographPage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
