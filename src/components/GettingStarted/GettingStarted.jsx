import React from 'react';
import './GettingStarted.css';

function GettingStarted({ onRegisterClick, onLoginClick }) {
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
        <button className="btn btn-primary btn-lg custom-btn" onClick={onRegisterClick}>Register</button>
        <button className="btn btn-primary btn-lg custom-btn" onClick={onLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default GettingStarted;