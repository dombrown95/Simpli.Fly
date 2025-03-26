import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import AboutUs from '../components/AboutUs/AboutUs';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import CargoSelector from '../components/CargoSelector/CargoSelector';
import InventoryForm from '../components/InventoryForm/InventoryForm';

function HomePage() {
  const [cargoType, setCargoType] = useState(null);
  const [cargoLimit, setCargoLimit] = useState(0);
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleCargoSelect = (option) => {
    setCargoType(option.value);
    setCargoLimit(option.limit);
    setItems([]); // Reset items when user changes cargo type.
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const currentWeight = items.reduce((total, item) => total + item.weight, 0);

  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <section>
        <CargoSelector
          selectedCargo={cargoType}
          onSelectCargo={handleCargoSelect}
        />

        {cargoType && (
          <section className="container mt-4">
            <div className="row justify-content-center align-items-start">
              
              {/* Left column for inventory form */}
              <div className="col-md-6 mb-4">
                <InventoryForm
                  onAddItem={handleAddItem}
                  onUpdateItem={handleUpdateItem}
                  editingItem={editingItem}
                  setEditingItem={setEditingItem}
                  cargoLimit={cargoLimit}
                  currentWeight={currentWeight}
                />
              </div>

              {/* Right column for cargo summary */}
              <div className="col-md-6 mb-4">
                <div className="item-form">
                  <h5>Current Cargo Weight: {currentWeight}kg / {cargoLimit}kg</h5>
                  <ul className="list-group mt-3">
                    {items.map((item) => (
                      <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-start"
                      >
                      <div>
                        <strong>{item.name}</strong>
                        {item.description && (
                          <div className="text-muted">{item.description}</div>
                        )}
                        <div className="text-muted small">{item.weight}kg</div>
                      </div>
                      <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handleEditItem(item)}>Edit</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteItem(item.id)}>Delete</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </section>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;