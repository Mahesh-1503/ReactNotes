import React from "react";

/**
 * A functional component that renders a list of fruits.
 */
const FruitList = () => {
  // Define an array of fruits
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <>
      <h3>Fruit List Example:</h3>

      <ul>
        {/* Use map to create a list item for each fruit */}
        {fruits.map((fruit, index) => (
          // Use the index as the key (assuming names are not unique)
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default FruitList;