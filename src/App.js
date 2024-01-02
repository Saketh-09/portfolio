import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/header/navbar';
import Home from "./components/home/home";
import Education from './components/education/education'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Experience from "./components/experience/experience";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Navbar />
        <Routes>
                <Route path='/portfolio/' element={<Home/>}></Route>
                <Route path='/education' element={<Education/>}></Route>
                <Route path='/experience' element={<Experience/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
