import React, { useState, useEffect } from 'react';
import './InventoryForm.css';
import axios from 'axios';

function InventoryForm({ onAddItem, onUpdateItem, editingItem, setEditingItem, cargoLimit, currentWeight }) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
      if (editingItem) {
        setName(editingItem.name);
        setWeight(editingItem.weight);
        setDescription(editingItem.description || '');
      }
    }, [editingItem]);
  
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
    
      const newTotal = currentWeight - (editingItem?.weight || 0) + weightValue;
      if (newTotal > cargoLimit) {
        setError(`If you add this item, you will exceed your cargo limit of ${cargoLimit}kg.`);
        return;
      }
    
      const newItem = {
        id: editingItem ? editingItem.id : Date.now(),
        name,
        weight: weightValue,
        description,
      };
    
      if (editingItem) {
        onUpdateItem(newItem);
      } else {
        onAddItem(newItem);
      }
    
      setName('');
      setWeight('');
      setDescription('');
      setError('');
      setEditingItem(null);
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
            {editingItem ? 'Update Item' : 'Add Item'}
          </button>
        </form>
      </div>
    );
  }
  
  export default InventoryForm;