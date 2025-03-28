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
  <a href="#cargo" className="btn btn-primary btn-lg custom-btn d-flex align-items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
    </svg>
    Register
  </a>
        <a href="#cargo" className="btn btn-primary btn-lg custom-btn">Login</a>
      </div>
    </div>
  );
}

export default GettingStarted;