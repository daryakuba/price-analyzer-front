import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './main/HomePage';
import './App.css';
import Perek from './perek/Perek';
import Metro from './metro/Metro';
import Globus from './globus/Globus';

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/perek" element={<Perek/>} />
            <Route path="/metro" element={<Metro/>} />
            <Route path="/globus" element={<Globus/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
