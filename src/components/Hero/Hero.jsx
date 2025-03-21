import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-heading">Welcome to Simpli.Fly!</h1>
        <h3 className="hero-subtitle">The easy way to manage your aerospace inventory.</h3>
      </div>
    </section>
  );
}

export default Hero;