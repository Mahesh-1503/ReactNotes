const Button = () => {
  // Define a function to handle the click event
  const handleClick = () => {
    alert('Button was clicked!');
  };

  // Return a button element with the onClick event handler
  return <button onClick={handleClick}>Click me</button>;
};