import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import GettingStarted from '../components/GettingStarted/GettingStarted';
import Footer from '../components/Footer/Footer';
import RegisterModal from '../components/Registration/RegisterModal'; // Add your modal import

function HomePage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShow = () => setShowRegisterModal(true);
  const handleClose = () => setShowRegisterModal(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container my-3">
        <div className="row gx-4 align-items-stretch d-flex">
          <div className="col-md-6 d-flex">
            <AboutUs />
          </div>
          <div className="col-md-6 d-flex">
            <GettingStarted onRegisterClick={handleShow} /> {/* Pass function */}
          </div>
        </div>
      </div>
      <RegisterModal show={showRegisterModal} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default HomePage;