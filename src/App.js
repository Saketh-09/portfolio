import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/header/navbar';
import Resume from "./components/resume/resume";
import Home from "./components/home/home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
