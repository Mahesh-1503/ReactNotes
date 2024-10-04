// src/components/EventHandlingExample1.js

import React from 'react';

const EventHandlingExample1 = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button className='bttn' onClick={handleClick}>Click me</button>
  );
};

export default EventHandlingExample1;

// In this example, we define a function called handleClick that displays an alert when the button is clicked. We then use this function as the onClick event handler for the button element. When the button is clicked, the handleClick function is called, which in turn displays the alert.
