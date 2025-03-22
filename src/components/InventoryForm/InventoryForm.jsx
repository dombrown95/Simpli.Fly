import React, { useState } from 'react';
import './InventoryForm.css';

function InventoryForm({ onAddItem, cargoLimit, currentWeight }) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const weightValue = parseFloat(weight);
  
      if (!name || !weight) {
        setError('Please enter a name and weight for your item.');
        return;
      }
  
      if (isNaN(weightValue) || weightValue <= 0) {
        setError('The weight of your item must be a positive number.');
        return;
      }
  
      const newTotal = currentWeight + weightValue;
  
      if (newTotal > cargoLimit) {
        setError(`If you add this item, you will exceed your cargo limit of ${cargoLimit}kg.`);
        return;
      }
  
      const newItem = {
        id: Date.now(),
        name,
        weight: weightValue,
        description,
      };
  
      onAddItem(newItem);
      setName('');
      setWeight('');
      setDescription('');
      setError('');
    };
  
    return (
      <div className="item-form container mt-4">
        <h4>Add Item to Cargo</h4>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
  
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Luggage"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 10.5"
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Description (optional)</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
            />
          </div>
  
          <button type="submit" className="btn btn-success">
            Add Item
          </button>
        </form>
      </div>
    );
  }
  
  export default InventoryForm;