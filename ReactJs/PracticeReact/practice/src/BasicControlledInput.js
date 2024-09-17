import React, { useState } from 'react';

// This component demonstrates the basic use of controlled input
const BasicControlledInput = () => {
  // Declare state variable 'inputValue' to store user input
  const [inputValue, setInputValue] = useState('');

  // Handle input change and update state
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state when user types
  };

  return (
    <div>
      <h2>Basic Controlled Input</h2>
      {/* Controlled input with value tied to state */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default BasicControlledInput;
