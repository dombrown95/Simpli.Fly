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
      <a href="#cargo" className="btn btn-primary mt-3">Register</a>
      <a href="#cargo" className="btn btn-primary mt-3">Login</a>
    </div>
  );
}

export default GettingStarted;