// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import SubmittedDetails from './components/SubmittedDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the form page */}
        <Route path="/" element={<Form />} />

        {/* Route for the page that displays submitted details */}
        <Route path="/submitted-details" element={<SubmittedDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
