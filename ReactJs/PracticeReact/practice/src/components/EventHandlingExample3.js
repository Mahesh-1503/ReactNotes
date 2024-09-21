// src/components/EventHandlingExample3.js
import React, { useState } from 'react';

const EventHandlingExample3 = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const colorOptions = ['red', 'green', 'blue', 'yellow'];

  return (
    <div>
      <h3>Select a color:</h3>
      {colorOptions.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{ backgroundColor: color, margin: '5px' }}
        >
          {color}
        </button>
      ))}
      <p>Selected color: {selectedColor}</p>
    </div>
  );
};

export default EventHandlingExample3;