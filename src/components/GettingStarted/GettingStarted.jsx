import React from 'react';
import './GettingStarted.css';

function GettingStarted() {
  return (
    <div className="get-started">
      <h2 className="get-heading">Getting Started</h2>
      <p className="get-text">
        New to Simpli.Fly? Follow these simple steps to start managing your aerospace inventory: 
      </p>
      <ol>
        <li>Click the register button.</li>
        <li>Enter a unique username and password.</li>
        <li>Select your cargo size and get going!</li>
      </ol>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <a href="#cargo" className="btn btn-primary btn-lg custom-btn">Register</a>
        <a href="#cargo" className="btn btn-primary btn-lg custom-btn">Login</a>
      </div>
    </div>
  );
}

export default GettingStarted;