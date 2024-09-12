# 30-Day React JS Course

This course is designed to take you from React basics to advanced concepts through practical learning and projects.

## Week 1: Basics

1. Introduction to React, JSX, and components

   - What is React?

     - A popular JavaScript library for building user interfaces
     - Makes it easier to create interactive web applications
     - Developed by Facebook, now used by many companies

   - JSX (JavaScript XML)

     - A special syntax that looks like HTML but is actually JavaScript
     - Allows you to write HTML-like code in your JavaScript files
     - Makes your React code easier to read and write

   - Components
     - Building blocks of React applications, like LEGO pieces
     - Reusable pieces of code that define parts of your user interface
     - Two types: Functional (newer, simpler) and Class (older, more complex)
     - Example of a simple functional component:
       ```jsx:src/components/Greeting.js
       // Define a functional component called Greeting
       function Greeting() {
         // Return a JSX element (an h1 tag with some text)
         return <h1>Hello, React Beginner!</h1>;
       }
       ```

2. Setting up a React environment and understanding imports/exports

   - Tools you'll need:

     - Node.js: A JavaScript runtime (like a special program to run JavaScript)
     - npm: Node Package Manager (comes with Node.js, helps install React tools)
     - A code editor: Like Visual Studio Code (VS Code) or Sublime Text

   - Creating your first React project:

     - We'll use a tool called Create React App (CRA) to set everything up
     - Open your computer's terminal or command prompt and type:
       ```bash
       # Create a new React app named "my-first-react-app"
       npx create-react-app my-first-react-app
       # Change directory to the newly created app folder
       cd my-first-react-app
       # Start the development server
       npm start
       ```
     - This creates a new folder with all the files you need to start coding

   - Understanding imports and exports:

     - Imports and exports allow you to share code between different files
     - This is crucial for organizing your React components and keeping your code modular

   - Import:

     - Used to include modules, components, or specific exports from other files
     - Examples:

       ```jsx
       // Default import
       import React from "react";

       // Named import
       import { useState, useEffect } from "react";

       // Importing a component
       import MyComponent from "./MyComponent";

       // Importing everything as an object
       import * as ReactRouter from "react-router-dom";
       ```

   - Export:

     - Used to make functions, objects, or primitives available to other files
     - Examples:

       ```jsx
       // Default export
       export default function MyComponent() {
         // Component code
       }

       // Named exports
       export const myFunction = () => {
         // Function code
       };

       export const MY_CONSTANT = 42;

       // Multiple named exports
       export { myFunction, MY_CONSTANT };
       ```

   - Tips for imports:

     - Use `./` for same-directory or child-directory imports
       - Example: `import Header from './components/Header';`
     - Use `../` to go up a directory
       - Example: `import Mahesh from '../projectsx/Mahesh';`
     - The number of `../` depends on how many levels you need to go up
       - `../../` goes up two directories, and so on
     - The file extension (.js or .jsx) is optional in imports
     - For absolute imports, configure your project's `jsconfig.json` or `tsconfig.json`
     - When importing from `node_modules`, you don't need to specify the path
       - Example: `import React from 'react';`
     - Use named imports for specific exports: `import { useState } from 'react';`
     - Use default import for the main export: `import MyComponent from './MyComponent';`
     - You can combine default and named imports:
       `import React, { useState } from 'react';`

   - Using imports and exports in your React project:

     - In src/App.js, you'll see imports for React and other components
     - When you create new components, you'll export them and import them where needed
     - Example:

       ```jsx:src/components/Welcome.js
       // Export the Welcome component
       export default function Welcome(props) {
         return <h1>Hello, {props.name}!</h1>;
       }

       // In src/App.js
       import Welcome from './components/Welcome';

       function App() {
         return <Welcome name="React Learner" />;
       }
       ```

   - Understanding your new React project:

     - src/ folder: Where you'll write your React code
     - public/ folder: For static files like images
     - package.json: Lists your project's dependencies (other code it needs)

   - Running your React app:
     - In the terminal, type `npm start` to run your app
     - Open a web browser and go to http://localhost:3000 to see your app

3. Props and state

   - Props (short for Properties):

     - A way to pass data from a parent component to a child component
     - Like passing arguments to a function
     - Example:

       ```jsx:src/components/Welcome.js
       // Define a Welcome component that accepts props
       function Welcome(props) {
         // Use the 'name' prop passed to this component
         return <h1>Hello, {props.name}!</h1>;
       }

       // Using the Welcome component in src/App.js
       // Pass the name "Sarah" as a prop to the Welcome component
       <Welcome name="Sarah" />
       ```

   - State:

     - A way for a component to manage its own data
     - When state changes, React automatically updates the component
     - Example using the useState hook:

       ```jsx:src/components/Counter.js
       // Import React and the useState hook from the 'react' package
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
       ```

     This example demonstrates how state works in a React component:

     - We use the `useState` hook to create and manage state.
     - The component re-renders automatically when state changes.
     - We can update state based on user interactions (button clicks in this case).
     - The current state is always reflected in the component's rendered output.

   - Props vs State: Simplified

   1. Props (Properties):

      - Data passed from parent to child component
      - Read-only (like function parameters)
      - Used to customize child components

   2. State:

      - Data managed within a component
      - Can be changed by the component itself
      - Used for data that changes over time

   3. Key Difference:

      - Props are for communication between components
      - State is for managing changing data within a component

   4. Example:
      - Props: A parent passing a username to a child component
      - State: A counter keeping track of its own value

   - Lifting State Up:

     - A pattern for sharing state between components
     - Move the state to the closest common ancestor of components that need it
     - Pass the state down as props and update functions as callbacks
     - Example:

       ```jsx:src/components/TemperatureConverter.js
       import React, { useState } from 'react';

       function TemperatureInput({ scale, temperature, onTemperatureChange }) {
         return (
           <fieldset>
             <legend>Enter temperature in {scale}:</legend>
             <input
               value={temperature}
               onChange={(e) => onTemperatureChange(e.target.value)}
             />
           </fieldset>
         );
       }

       function TemperatureConverter() {
         const [celsius, setCelsius] = useState('');
         const [fahrenheit, setFahrenheit] = useState('');

         function toCelsius(fahrenheit) {
           return (fahrenheit - 32) * 5 / 9;
         }

         function toFahrenheit(celsius) {
           return (celsius * 9 / 5) + 32;
         }

         function handleCelsiusChange(temperature) {
           setCelsius(temperature);
           setFahrenheit(Math.round(toFahrenheit(temperature)));
         }

         function handleFahrenheitChange(temperature) {
           setFahrenheit(temperature);
           setCelsius(Math.round(toCelsius(temperature)));
         }

         return (
           <div>
             <TemperatureInput
               scale="Celsius"
               temperature={celsius}
               onTemperatureChange={handleCelsiusChange}
             />
             <TemperatureInput
               scale="Fahrenheit"
               temperature={fahrenheit}
               onTemperatureChange={handleFahrenheitChange}
             />
           </div>
         );
       }

       export default TemperatureConverter;
       ```

   - Controlled Components:

     - Form elements whose values are controlled by React state
     - Useful for immediate validation and conditional disabling of form submission
     - Example:

       ```jsx:src/components/ControlledForm.js
       import React, { useState } from 'react';

       function ControlledForm() {
         const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         const [isValid, setIsValid] = useState(false);

         const handleNameChange = (e) => {
           setName(e.target.value);
           validateForm(e.target.value, email);
         };

         const handleEmailChange = (e) => {
           setEmail(e.target.value);
           validateForm(name, e.target.value);
         };

         const validateForm = (name, email) => {
           const isNameValid = name.length > 0;
           const isEmailValid = /\S+@\S+\.\S+/.test(email);
           setIsValid(isNameValid && isEmailValid);
         };

         const handleSubmit = (e) => {
           e.preventDefault();
           if (isValid) {
             console.log('Form submitted:', { name, email });
           }
         };

         return (
           <form onSubmit={handleSubmit}>
             <input
               type="text"
               value={name}
               onChange={handleNameChange}
               placeholder="Name"
             />
             <input
               type="email"
               value={email}
               onChange={handleEmailChange}
               placeholder="Email"
             />
             <button type="submit" disabled={!isValid}>
               Submit
             </button>
           </form>
         );
       }
       ```

   - PropTypes:

     - A way to validate the types of props passed to a component
     - Helps catch bugs by ensuring correct data types are used
     - Example:

       ```jsx:src/components/User.js
       import PropTypes from 'prop-types';

       function User({ name, age, isStudent }) {
         return (
           <div>
             <p>Name: {name}</p>
             <p>Age: {age}</p>
             <p>Student: {isStudent ? 'Yes' : 'No'}</p>
           </div>
         );
       }

       User.propTypes = {
         name: PropTypes.string.isRequired,
         age: PropTypes.number,
         isStudent: PropTypes.bool
       };

       export default User;
       ```

4. Handling events and conditional rendering

   - Handling Events:

     - How your app responds to user actions like clicks or key presses
     - In React, you use camelCase for event names (e.g., onClick, onSubmit)
     - Example:

       ```jsx:src/components/Button.js
       function Button() {
         // Define a function to handle the click event
         const handleClick = () => {
           alert('Button was clicked!');
         };

         // Return a button element with the onClick event handler
         return <button onClick={handleClick}>Click me</button>;
       }
       ```

   - Conditional Rendering:
     - Showing different content based on certain conditions
     - Uses regular JavaScript if statements or ternary operators
     - Example:
       ```jsx:src/components/Greeting.js
       function Greeting({ isLoggedIn }) {
         // Use an if statement to conditionally render different content
         if (isLoggedIn) {
           return <h1>Welcome back!</h1>;
         } else {
           return <h1>Please sign in.</h1>;
         }
       }
       ```

5. Lists and keys

   - Rendering Lists:

     - How to display multiple similar items in React
     - Use JavaScript's map() function to create lists of elements
     - Example:
       ```jsx:src/components/FruitList.js
       function FruitList() {
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
       }
       ```

   - Keys:
     - Special attributes that help React keep track of list items
     - Should be unique among siblings (items in the same list)
     - Help React update lists efficiently
     - Usually, use IDs from your data as keys
     - If you don't have stable IDs, you can use the item index as a last resort:
       ```jsx:src/components/NumberList.js
       function NumberList() {
       ```

# 30-Day React JS Course

This course is designed to take you from React basics to advanced concepts through practical learning and projects.

## Week 1: Basics

1. Introduction to React, JSX, and components

   - What is React?

     - A popular JavaScript library for building user interfaces
     - Makes it easier to create interactive web applications
     - Developed by Facebook, now used by many companies

   - JSX (JavaScript XML)

     - A special syntax that looks like HTML but is actually JavaScript
     - Allows you to write HTML-like code in your JavaScript files
     - Makes your React code easier to read and write

   - Components
     - Building blocks of React applications, like LEGO pieces
     - Reusable pieces of code that define parts of your user interface
     - Two types: Functional (newer, simpler) and Class (older, more complex)
     - Example of a simple functional component:
       ```jsx:src/components/Greeting.js
       // Define a functional component called Greeting
       function Greeting() {
         // Return a JSX element (an h1 tag with some text)
         return <h1>Hello, React Beginner!</h1>;
       }
       ```

2. Setting up a React environment and understanding imports/exports

   - Tools you'll need:

     - Node.js: A JavaScript runtime (like a special program to run JavaScript)
     - npm: Node Package Manager (comes with Node.js, helps install React tools)
     - A code editor: Like Visual Studio Code (VS Code) or Sublime Text

   - Creating your first React project:

     - We'll use a tool called Create React App (CRA) to set everything up
     - Open your computer's terminal or command prompt and type:
       ```bash
       # Create a new React app named "my-first-react-app"
       npx create-react-app my-first-react-app
       # Change directory to the newly created app folder
       cd my-first-react-app
       # Start the development server
       npm start
       ```
     - This creates a new folder with all the files you need to start coding

   - Understanding imports and exports:

     - Imports and exports allow you to share code between different files
     - This is crucial for organizing your React components and keeping your code modular

   - Import:

     - Used to include modules, components, or specific exports from other files
     - Examples:

       ```jsx
       // Default import
       import React from "react";

       // Named import
       import { useState, useEffect } from "react";

       // Importing a component
       import MyComponent from "./MyComponent";

       // Importing everything as an object
       import * as ReactRouter from "react-router-dom";
       ```

   - Export:

     - Used to make functions, objects, or primitives available to other files
     - Examples:

       ```jsx
       // Default export
       export default function MyComponent() {
         // Component code
       }

       // Named exports
       export const myFunction = () => {
         // Function code
       };

       export const MY_CONSTANT = 42;

       // Multiple named exports
       export { myFunction, MY_CONSTANT };
       ```

   - Tips for imports:

     - Use `./` for same-directory or child-directory imports
       - Example: `import Header from './components/Header';`
     - Use `../` to go up a directory
       - Example: `import Mahesh from '../projectsx/Mahesh';`
     - The number of `../` depends on how many levels you need to go up
       - `../../` goes up two directories, and so on
     - The file extension (.js or .jsx) is optional in imports
     - For absolute imports, configure your project's `jsconfig.json` or `tsconfig.json`
     - When importing from `node_modules`, you don't need to specify the path
       - Example: `import React from 'react';`
     - Use named imports for specific exports: `import { useState } from 'react';`
     - Use default import for the main export: `import MyComponent from './MyComponent';`
     - You can combine default and named imports:
       `import React, { useState } from 'react';`

   - Using imports and exports in your React project:

     - In src/App.js, you'll see imports for React and other components
     - When you create new components, you'll export them and import them where needed
     - Example:

       ```jsx:src/components/Welcome.js
       // Export the Welcome component
       export default function Welcome(props) {
         return <h1>Hello, {props.name}!</h1>;
       }

       // In src/App.js
       import Welcome from './components/Welcome';

       function App() {
         return <Welcome name="React Learner" />;
       }
       ```

   - Understanding your new React project:

     - src/ folder: Where you'll write your React code
     - public/ folder: For static files like images
     - package.json: Lists your project's dependencies (other code it needs)

   - Running your React app:
     - In the terminal, type `npm start` to run your app
     - Open a web browser and go to http://localhost:3000 to see your app

3. Props and state

   - Props (short for Properties):

     - A way to pass data from a parent component to a child component
     - Like passing arguments to a function
     - Example:

       ```jsx:src/components/Welcome.js
       // Define a Welcome component that accepts props
       function Welcome(props) {
         // Use the 'name' prop passed to this component
         return <h1>Hello, {props.name}!</h1>;
       }

       // Using the Welcome component in src/App.js
       // Pass the name "Sarah" as a prop to the Welcome component
       <Welcome name="Sarah" />
       ```

   - State:

     - A way for a component to manage its own data
     - When state changes, React automatically updates the component
     - Example using the useState hook:

       ```jsx:src/components/Counter.js
       import React, { useState } from 'react';

       function Counter() {
         // Initialize state 'count' with 0 and get the setter function 'setCount'
         const [count, setCount] = useState(0);

         return (
           <div>
             {/* Display the current count */}
             <p>You clicked {count} times</p>
             {/* Button that increases the count when clicked */}
             <button onClick={() => setCount(count + 1)}>
               Click me
             </button>
           </div>
         );
       }

       export default Counter;
       ```

   - Props vs State: Simplified

   1. Props (Properties):

      - Data passed from parent to child component
      - Read-only (like function parameters)
      - Used to customize child components

   2. State:

      - Data managed within a component
      - Can be changed by the component itself
      - Used for data that changes over time

   3. Key Difference:

      - Props are for communication between components
      - State is for managing changing data within a component

   4. Example:
      - Props: A parent passing a username to a child component
      - State: A counter keeping track of its own value

   - Lifting State Up:

     - A way to share data between related components
     - Put shared data in a parent component
     - Send data to child components as props
     - Let child components update the data through functions
     - Example:

       ```jsx:src/components/TemperatureConverter.js
       import React, { useState } from 'react';

       function TemperatureInput({ scale, temperature, onTemperatureChange }) {
         return (
           <fieldset>
             <legend>Enter temperature in {scale}:</legend>
             <input
               value={temperature}
               onChange={(e) => onTemperatureChange(e.target.value)}
             />
           </fieldset>
         );
       }

       function TemperatureConverter() {
         const [celsius, setCelsius] = useState('');
         const [fahrenheit, setFahrenheit] = useState('');

         function toCelsius(fahrenheit) {
           return (fahrenheit - 32) * 5 / 9;
         }

         function toFahrenheit(celsius) {
           return (celsius * 9 / 5) + 32;
         }

         function handleCelsiusChange(temperature) {
           setCelsius(temperature);
           setFahrenheit(Math.round(toFahrenheit(temperature)));
         }

         function handleFahrenheitChange(temperature) {
           setFahrenheit(temperature);
           setCelsius(Math.round(toCelsius(temperature)));
         }

         return (
           <div>
             <TemperatureInput
               scale="Celsius"
               temperature={celsius}
               onTemperatureChange={handleCelsiusChange}
             />
             <TemperatureInput
               scale="Fahrenheit"
               temperature={fahrenheit}
               onTemperatureChange={handleFahrenheitChange}
             />
           </div>
         );
       }

       export default TemperatureConverter;
       ```

   - Controlled Components:

     - Form elements whose values are controlled by React state
     - Useful for immediate validation and conditional disabling of form submission
     - Example:

       ```jsx:src/components/ControlledForm.js
       import React, { useState } from 'react';

       function ControlledForm() {
         const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         const [isValid, setIsValid] = useState(false);

         const handleNameChange = (e) => {
           setName(e.target.value);
           validateForm(e.target.value, email);
         };

         const handleEmailChange = (e) => {
           setEmail(e.target.value);
           validateForm(name, e.target.value);
         };

         const validateForm = (name, email) => {
           const isNameValid = name.length > 0;
           const isEmailValid = /\S+@\S+\.\S+/.test(email);
           setIsValid(isNameValid && isEmailValid);
         };

         const handleSubmit = (e) => {
           e.preventDefault();
           if (isValid) {
             console.log('Form submitted:', { name, email });
           }
         };

         return (
           <form onSubmit={handleSubmit}>
             <input
               type="text"
               value={name}
               onChange={handleNameChange}
               placeholder="Name"
             />
             <input
               type="email"
               value={email}
               onChange={handleEmailChange}
               placeholder="Email"
             />
             <button type="submit" disabled={!isValid}>
               Submit
             </button>
           </form>
         );
       }
       ```

   - PropTypes:

     - A way to validate the types of props passed to a component
     - Helps catch bugs by ensuring correct data types are used
     - Example:

       ```jsx:src/components/User.js
       import PropTypes from 'prop-types';

       function User({ name, age, isStudent }) {
         return (
           <div>
             <p>Name: {name}</p>
             <p>Age: {age}</p>
             <p>Student: {isStudent ? 'Yes' : 'No'}</p>
           </div>
         );
       }

       User.propTypes = {
         name: PropTypes.string.isRequired,
         age: PropTypes.number,
         isStudent: PropTypes.bool
       };

       export default User;
       ```

4. Handling events and conditional rendering

   - Handling Events:

     - How your app responds to user actions like clicks or key presses
     - In React, you use camelCase for event names (e.g., onClick, onSubmit)
     - Example:

       ```jsx:src/components/Button.js
       function Button() {
         // Define a function to handle the click event
         const handleClick = () => {
           alert('Button was clicked!');
         };

         // Return a button element with the onClick event handler
         return <button onClick={handleClick}>Click me</button>;
       }
       ```

   - Conditional Rendering:
     - Showing different content based on certain conditions
     - Uses regular JavaScript if statements or ternary operators
     - Example:
       ```jsx:src/components/Greeting.js
       function Greeting({ isLoggedIn }) {
         // Use an if statement to conditionally render different content
         if (isLoggedIn) {
           return <h1>Welcome back!</h1>;
         } else {
           return <h1>Please sign in.</h1>;
         }
       }
       ```

5. Lists and keys

   - Rendering Lists:

     - How to display multiple similar items in React
     - Use JavaScript's map() function to create lists of elements
     - Example:
       ```jsx:src/components/FruitList.js
       function FruitList() {
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
       }
       ```

   - Keys:
     - Special attributes that help React keep track of list items
     - Should be unique among siblings (items in the same list)
     - Help React update lists efficiently
     - Usually, use IDs from your data as keys
     - If you don't have stable IDs, you can use the item index as a last resort:
       ```jsx:src/components/NumberList.js
       function NumberList() {
         const numbers = [1, 2, 3, 4, 5];
         return (
           <ul>
             {/* Use map to create a list item for each number */}
             {numbers.map((number, index) => (
               // Use the index as the key (not ideal if list order changes)
               <li key={index}>{number}</li>
             ))}
           </ul>
         );
       }
       ```
     - Note: Using index as keys can cause issues if your list order changes

6. Project: Simple todo list app
   - Apply the concepts learned in days 1-5
   - Create a basic todo list application
   - Features: Add tasks, mark tasks as complete, delete tasks

Rendering examples in App.js:
To see these examples in action, you can import and use them in your src/App.js file. Here's how you might structure your App.js to showcase the examples from days 1-5:

## Week 2: Hooks and Lifecycle

7. useState and useEffect hooks
8. Custom hooks
9. useContext for state management
10. useRef and useMemo
11. useReducer for complex state logic
12. Project: Weather app using API

## Week 3: Routing and Forms

13. React Router basics
14. Nested routes and route parameters
15. Form handling and validation
16. Controlled vs uncontrolled components
17. File uploads in React
18. Project: Multi-page blog app

## Week 4: State Management and APIs

19. Introduction to Redux
20. Actions, reducers, and store
21. React-Redux hooks
22. Async actions with Redux Thunk
23. Fetching data from APIs
24. Project: E-commerce app with Redux

## Week 5: Advanced Concepts

25. Code splitting and lazy loading
26. Error boundaries and debugging
27. Server-side rendering with Next.js
28. Testing React components
29. Performance optimization techniques
30. Final project: Full-stack social media app

Each day includes theory, coding examples, and hands-on exercises. Projects help reinforce concepts learned throughout the week.
