// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Top100 from './components/Top100';
import FilmSearch from './components/FilmSearch';
import RandomFilm from './components/RandomFilm'; // Import the RandomFilm component here
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/top100" element={<Top100 />} />
            <Route path="/search" element={<FilmSearch />} />
            <Route path="/random" element={<RandomFilm />} /> {/* Add the RandomFilm route here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
