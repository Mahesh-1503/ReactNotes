// src/components/EventHandlingExample1.js

import React from 'react';

const EventHandlingExample1 = () => {
  // Define a function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Attach the click event to the button */}
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandlingExample1;
