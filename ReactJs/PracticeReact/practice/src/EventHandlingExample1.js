// src/components/EventHandlingExample1.js

import React from 'react';

const EventHandlingExample1 = () => {
  // Define a function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h2>Event Handling Example 1</h2>
      {/* Attach the click event to the button */}
      <button className='btn' onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandlingExample1;

{/* 
Explanation:
This component demonstrates basic event handling in React:

1. We define a functional component called EventHandlingExample1.
2. Inside the component, we create a handleClick function that shows an alert when called.
3. In the JSX, we render a button element.
4. We attach the handleClick function to the button's onClick event using the onClick attribute.
5. When the button is clicked, it triggers the handleClick function, showing the alert.

This example showcases how to create a simple event handler and attach it to a DOM element in React.
*/}
