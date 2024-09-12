const FruitList = () => {
  // Define an array of fruits
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <ul>
      {/* Use map to create a list item for each fruit */}
      {fruits.map((fruit) => (
        // Use the fruit name as the key (assuming names are unique)
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
};