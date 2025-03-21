import React from 'react';
import './CargoSelector.css';

function CargoSelector({ selectedCargo, onSelectCargo }) {
  const options = [
    {
      label: 'Small Cargo',
      value: 'small',
      limit: 100,
      image: '/assets/images/SmallPlane.jpg'
    },
    {
      label: 'Medium Cargo',
      value: 'medium',
      limit: 500,
      image: '/assets/images/MediumPlane.jpg'
    },
    {
      label: 'Large Cargo',
      value: 'large',
      limit: 1000,
      image: '/assets/images/LargePlane.jpg'
    }
  ];

  return (
    <div className="container text-center py-4 cargo-selector">
      <h3>Please select your cargo size:</h3>
      <div className="row justify-content-center mt-4">
        {options.map((option) => (
          <div className="col-6 col-md-3 cargo-option" key={option.value}>
            <div className="cargo-card">
              <img
                src={option.image}
                alt={`${option.label} plane`}
                className="img-fluid mb-2"
              />
              <button
                className={`btn ${
                  selectedCargo === option.value ? 'btn-primary' : 'btn-outline-primary'
                } cargo-button`}
                onClick={() => onSelectCargo(option)}
              >
                {option.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CargoSelector;