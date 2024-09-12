const Greeting = ({ isLoggedIn }) => {
  // Use a ternary operator for conditional rendering
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
};