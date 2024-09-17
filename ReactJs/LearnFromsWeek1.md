### 1. **Event Handling in React**

Event handling in React refers to managing user interactions such as clicks, key presses, form submissions, etc. React provides a declarative way to handle events, which simplifies the process compared to vanilla JavaScript. Instead of attaching event listeners manually (like in DOM manipulation), React uses a standardized naming convention (camelCase) for events (e.g., `onClick`, `onChange`) and attaches them to JSX elements.

#### Key points:
- **Functions as Event Handlers**: Event handling functions are passed as props.
- **Synthetic Events**: React wraps browser events in its synthetic event system for better performance and cross-browser compatibility.
  
### 2. **Conditional Rendering in React**

Conditional rendering refers to rendering components or elements based on a condition. React allows you to conditionally render elements using JavaScript operators like `if-else`, ternary (`? :`), and logical `&&`. This is a powerful way to make your UI dynamic, responding to different states like user interactions, API responses, etc.

#### Key points:
- **Ternary operator**: Used frequently in JSX for concise conditional rendering.
- **Short-circuiting with `&&`**: Ideal for rendering something when a condition is `true`.

---

### 3. **Examples with Code**

#### Example 1: Simple Button Click Event
**File Path**: `src/components/EventHandlingExample1.js`

```jsx
// src/components/EventHandlingExample1.js

import React from 'react';

const EventHandlingExample1 = () => {
  // Define a function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Attach the click event to the button */}
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandlingExample1;
```

**Comments:**
- `handleClick`: This function is triggered when the button is clicked.
- `onClick={handleClick}`: The `onClick` attribute in JSX listens for the button click and invokes the `handleClick` function.

---

#### Example 2: Toggle Visibility with Conditional Rendering
**File Path**: `src/components/EventHandlingExample2.js`

```jsx
// src/components/EventHandlingExample2.js

import React, { useState } from 'react';

const EventHandlingExample2 = () => {
  // Define state to track visibility
  const [isVisible, setIsVisible] = useState(true);

  // Toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {/* Conditionally render the paragraph */}
      {isVisible && <p>This is a toggled paragraph!</p>}
    </div>
  );
};

export default EventHandlingExample2;
```

**Comments:**
- `useState(true)`: This initializes the visibility state as `true` (visible by default).
- `{isVisible && <p>...</p>}`: This line conditionally renders the paragraph if `isVisible` is `true`.
- `toggleVisibility`: Changes the state from `true` to `false` or vice versa when the button is clicked.

---

#### Example 3: Controlled Input with Event Handling
**File Path**: `src/components/EventHandlingExample3.js`

```jsx
// src/components/EventHandlingExample3.js

import React, { useState } from 'react';

const EventHandlingExample3 = () => {
  // State to hold input value
  const [inputValue, setInputValue] = useState('');

  // Update state when input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Controlled input field */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type something..." 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default EventHandlingExample3;
```

**Comments:**
- `value={inputValue}`: Makes the input a controlled component.
- `onChange={handleInputChange}`: Updates the input's state whenever the user types something.
- `setInputValue(event.target.value)`: Captures the input's value and sets it in state.

---

#### Example 4: Conditional Rendering with Ternary Operator
**File Path**: `src/components/EventHandlingExample4.js`

```jsx
// src/components/EventHandlingExample4.js

import React, { useState } from 'react';

const EventHandlingExample4 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Ternary operator for conditional rendering */}
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
    </div>
  );
};

export default EventHandlingExample4;
```

**Comments:**
- `{isLoggedIn ? 'Logout' : 'Login'}`: Renders the appropriate button text based on the login state.
- `{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}`: Conditionally renders a message depending on whether the user is logged in.

---

#### Example 5: Event Handling with Multiple Buttons and Conditional Rendering
**File Path**: `src/components/EventHandlingExample5.js`

```jsx
// src/components/EventHandlingExample5.js

import React, { useState } from 'react';

const EventHandlingExample5 = () => {
  // State to track which button was clicked
  const [clickedButton, setClickedButton] = useState('');

  // Handle button clicks
  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (
    <div>
      {/* Three buttons with different actions */}
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>

      {/* Conditional rendering based on clicked button */}
      {clickedButton && <p>You clicked {clickedButton}</p>}
    </div>
  );
};

export default EventHandlingExample5;
```

**Comments:**
- `handleButtonClick('Button 1')`: Passes the button name to the handler function using an arrow function.
- `{clickedButton && <p>You clicked {clickedButton}</p>}`: Conditionally displays the paragraph only if a button has been clicked (`clickedButton` is not an empty string).

---

### Conclusion
By mastering event handling and conditional rendering in React, you gain control over how the UI responds to user interactions, creating more dynamic and responsive applications.