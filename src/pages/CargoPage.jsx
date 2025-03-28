import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import CargoSelector from '../components/CargoSelector/CargoSelector';
import InventoryForm from '../components/InventoryForm/InventoryForm';
import Footer from '../components/Footer/Footer';

function CargoPage() {
  const [cargoType, setCargoType] = useState(null);
  const [cargoLimit, setCargoLimit] = useState(0);
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchInventory = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await axios.get(`/api/inventory/${userId}`);
          setItems(response.data);
        } catch (error) {
          console.error('Error fetching inventory:', error);
        }
      }
    };
  
    fetchInventory();
  }, []);

  const handleCargoSelect = (option) => {
    setCargoType(option.value);
    setCargoLimit(option.limit);
    setItems([]);
  };

  const handleAddItem = async (item) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.post('/api/inventory', { userId, ...item });
      setItems([...items, item]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = async (updatedItem) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.put(`/api/inventory/${updatedItem.id}`, { userId, ...updatedItem });
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
    const userId = localStorage.getItem('userId');
    try {
      await axios.delete(`/api/inventory/${id}`, { data: { userId } });
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const currentWeight = items.reduce((total, item) => total + item.weight, 0);

  return (
    <div>
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
  );
}

export default CargoPage;