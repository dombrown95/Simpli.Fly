import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import CargoSelector from '../components/CargoSelector/CargoSelector';
import InventoryForm from '../components/InventoryForm/InventoryForm';

function HomePage() {
  const [cargoType, setCargoType] = useState(null);
  const [cargoLimit, setCargoLimit] = useState(0);
  const [items, setItems] = useState([]);

  const handleCargoSelect = (option) => {
    setCargoType(option.value);
    setCargoLimit(option.limit);
    setItems([]);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const currentWeight = items.reduce((total, item) => total + item.weight, 0);

  return (
    <div>
      <Hero />

      <section>
        <CargoSelector
          selectedCargo={cargoType}
          onSelectCargo={handleCargoSelect}
        />

        {cargoType && (
          <>
            <InventoryForm
              onAddItem={handleAddItem}
              cargoLimit={cargoLimit}
              currentWeight={currentWeight}
            />

            <div className="container mt-4">
              <h5>Current Cargo Weight: {currentWeight}kg / {cargoLimit}kg</h5>
              <ul className="list-group mt-3">
                {items.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.name}</strong>
                      {item.description && <div className="text-muted">{item.description}</div>}
                    </div>
                    <span>{item.weight}kg</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;