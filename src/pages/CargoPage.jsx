import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import CargoSelector from '../components/CargoSelector/CargoSelector';
import InventoryForm from '../components/InventoryForm/InventoryForm';
import Footer from '../components/Footer/Footer';
import {
  fetchInventory,
  addItem,
  updateItem,
  deleteItem
} from '../api/api';

function CargoPage() {
  const [cargoType, setCargoType] = useState(null);
  const [cargoLimit, setCargoLimit] = useState(0);
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [username, setUsername] = useState('');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);

    const loadInventory = async () => {
      if (userId) {
        try {
          const data = await fetchInventory(userId);
          setItems(data);
        } catch (error) {
          console.error('Error fetching inventory:', error);
        }
      }
    };

    loadInventory();
  }, [userId]);

  const handleCargoSelect = (option) => {
    setCargoType(option.value);
    setCargoLimit(option.limit);
  };

  const handleAddItem = async (item) => {
    try {
      await addItem({ userId, ...item });
      setItems([...items, item]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      await updateItem(updatedItem.id, { userId, ...updatedItem });
      const updatedItems = items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      setItems(updatedItems);
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id, userId);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const currentWeight = items.reduce((total, item) => total + item.weight, 0);

  return (
    <div>
      <div style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: 0 }}>
        <NavBar />
        <Hero />

        {username && (
          <div className="text-center my-3">
            <h5 className="text-success">Logged in as: {username}</h5>
          </div>
        )}

        <CargoSelector
          selectedCargo={cargoType}
          onSelectCargo={handleCargoSelect}
        />

        {cargoType && (
          <section className="container mt-4">
            <div className="row justify-content-center align-items-start">
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
              <div className="col-md-6 mb-4">
                <div className="item-form">
                  <h5>
                    Current Cargo Weight: {currentWeight}kg / {cargoLimit}kg
                  </h5>
                  <ul className="list-group mt-3">
                    {items.map((item) => (
                      <li key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start w-100">
                          <div className="me-3">
                            <strong>{item.name}</strong>
                            <div className="text-muted small">{item.weight}kg</div>
                          </div>

                          {item.description && (<div className="text-muted me-3">{item.description}</div>)}

                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => handleEditItem(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDeleteItem(item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default CargoPage;