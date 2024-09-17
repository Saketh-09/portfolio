import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported here
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/navbar';
import Home from './components/home/home';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient and blur */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Main content */}
      <CssBaseline />
      <Navbar />
      {/* Ensure Home content stays within the background */}
      <div className="relative z-10 min-h-screen">
        <Home />
      </div>
    </div>
  );
}

export default App;
