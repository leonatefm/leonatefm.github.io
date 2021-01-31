import './App.scss';
import React from 'react';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';

function App() {
  return (
    <div className='App'>
      <HomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
