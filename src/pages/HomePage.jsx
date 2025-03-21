import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import CargoSelector from '../components/CargoSelector/CargoSelector';

function HomePage() {
  const [cargoType, setCargoType] = useState(null);
  const [cargoLimit, setCargoLimit] = useState(0);

  const handleCargoSelect = (option) => {
    setCargoType(option.value);
    setCargoLimit(option.limit);
  };

  return (
    <div>
      <Hero />

      <section>
        <CargoSelector
          selectedCargo={cargoType}
          onSelectCargo={handleCargoSelect}
        />
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;