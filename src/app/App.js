import './App.scss';
import React from 'react';
import HomePage from './pages/home';
import PhotographPage from './pages/photograph';
import ProjectsPage from './pages/projects';

function App() {
  return (
    <div className='App'>
      <HomePage />
      <ProjectsPage />
      <PhotographPage />
    </div>
  );
}

export default App;
