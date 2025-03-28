import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CargoPage from './pages/CargoPage';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cargo" element={<CargoPage />} />
      </Routes>
    </div>
  );
}

export default App;
