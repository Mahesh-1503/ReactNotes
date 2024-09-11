import React, { useState } from 'react';

// Define the Counter component
function Counter() {
  // useState hook: Create a state variable 'count' and its setter function 'setCount'
  // The initial value of 'count' is set to 0
  const [count, setCount] = useState(0);

  // Define the increment function
  const increment = () => {
    // Use the functional form of setCount to ensure we're working with the latest state
    // This is important for avoiding race conditions in case of rapid updates
    setCount(prevCount => prevCount + 1);
    // This is equivalent to: setCount(count + 1)
    // But using prevCount => prevCount + 1 is safer and recommended
  };

  // Define the decrement function
  const decrement = () => {
    // Similar to increment, we use the functional form of setCount
    setCount(prevCount => prevCount - 1);
  };

  // The JSX that will be rendered
  return (
    <div>
      {/* Display the current count */}
      {/* The count value is dynamically inserted into the paragraph */}
      <p>Count: {count}</p>
      
      {/* Button to increment the count */}
      {/* When clicked, it calls the increment function */}
      <button onClick={increment}>
        Increment (+1)
      </button>
      
      {/* Button to decrement the count */}
      {/* When clicked, it calls the decrement function */}
      <button onClick={decrement}>
        Decrement (-1)
      </button>
    </div>
  );
}

// Export the Counter component so it can be imported and used in other files
export default Counter;

// Detailed explanation of how this component works:
// 1. When the component is first rendered, 'count' is initialized to 0.
// 2. The component renders a paragraph showing the current count and two buttons.
// 3. When the "Increment" button is clicked, the 'increment' function is called.
//    This function updates the 'count' state by adding 1 to its current value.
// 4. When the "Decrement" button is clicked, the 'decrement' function is called.
//    This function updates the 'count' state by subtracting 1 from its current value.
// 5. Every time the state is updated (by calling setCount), React re-renders the component.
// 6. During re-render, the new value of 'count' is displayed in the paragraph.
// 7. This cycle continues for each user interaction, allowing the count to be
//    dynamically updated and displayed.