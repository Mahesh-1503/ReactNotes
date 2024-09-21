// src/components/EventHandlingExample4.js
import React, { useState } from 'react';

const EventHandlingExample4 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {count > 0 ? (
        <p>The count is positive.</p>
      ) : count < 0 ? (
        <p>The count is negative.</p>
      ) : (
        <p>The count is zero.</p>
      )}
    </div>
  );
};

export default EventHandlingExample4;