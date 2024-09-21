import React, { useState } from 'react';

const EventHandlingExample2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      {isLoggedIn && <p>Welcome, user!</p>}
    </div>
  );
};

export default EventHandlingExample2;