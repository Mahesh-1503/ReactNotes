import React, { useState } from 'react';

function EventHandlingExample2() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <p>This paragraph is conditionally rendered.</p>}
    </div>
  );
}

export default EventHandlingExample2;