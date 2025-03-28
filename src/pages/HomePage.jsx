import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import GettingStarted from '../components/GettingStarted/GettingStarted';
import Footer from '../components/Footer/Footer';
import RegisterModal from '../components/Registration/RegisterModal';
import LoginModal from '../components/Login/LoginModal';

function HomePage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShow = () => setShowRegisterModal(true);
  const handleClose = () => setShowRegisterModal(false);

  const handleLoginShow = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

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
            <GettingStarted
              onRegisterClick={handleShow}
              onLoginClick={handleLoginShow}
            />
          </div>
        </div>
      </div>
      <RegisterModal show={showRegisterModal} handleClose={handleClose} />
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
      <Footer />
    </div>
  );
}

export default HomePage;