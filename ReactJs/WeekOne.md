# Week 1: Basics

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

       // Arrow function component
       const Counter = () => {
         // useState hook: Create a state variable 'count' and its setter function 'setCount'
         const [count, setCount] = useState(0);

         // Arrow function for increment
         const increment = () => {
           // Use the functional form of setCount for safer state updates
           setCount(prevCount => prevCount + 1);
         };

         // Arrow function for decrement
         const decrement = () => {
           setCount(prevCount => prevCount - 1);
         };

         // JSX using arrow functions for event handlers
         return (
           <div>
             <p>Count: {count}</p>
             <button onClick={increment}>Increment (+1)</button>
             <button onClick={decrement}>Decrement (-1)</button>
           </div>
         );
       };

       export default Counter;

       // This example uses arrow functions for:
       // 1. The main component (Counter)
       // 2. The increment and decrement functions
       // 3. The onClick event handlers (implicitly)
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

       // Arrow function component with destructured props
       const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => (
         <fieldset>
           <legend>Enter temperature in {scale}:</legend>
           <input
             value={temperature}
             onChange={(e) => onTemperatureChange(e.target.value)}
           />
         </fieldset>
       );

       // Main component as an arrow function
       const TemperatureConverter = () => {
         const [celsius, setCelsius] = useState('');
         const [fahrenheit, setFahrenheit] = useState('');

         // Arrow functions for temperature conversions
         const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
         const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

         // Arrow functions for handling temperature changes
         const handleCelsiusChange = (temperature) => {
           setCelsius(temperature);
           setFahrenheit(Math.round(toFahrenheit(parseFloat(temperature))).toString());
         };

         const handleFahrenheitChange = (temperature) => {
           setFahrenheit(temperature);
           setCelsius(Math.round(toCelsius(parseFloat(temperature))).toString());
         };

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
       };

       export default TemperatureConverter;

       // This example demonstrates:
       // 1. Arrow function components (TemperatureInput and TemperatureConverter)
       // 2. Arrow functions for calculations (toCelsius and toFahrenheit)
       // 3. Arrow functions for event handlers (handleCelsiusChange and handleFahrenheitChange)
       // 4. Implicit returns for simple components (TemperatureInput)
       ```

   - Controlled Components:

     - Form elements whose values are controlled by React state
     - Useful for immediate validation and conditional disabling of form submission
     - Example:

       ```jsx:src/components/ControlledForm.js
       import React, { useState } from 'react';

       // Arrow function component
       const ControlledForm = () => {
         const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         const [isValid, setIsValid] = useState(false);

         // Arrow function for name change
         const handleNameChange = (e) => {
           setName(e.target.value);
           validateForm(e.target.value, email);
         };

         // Arrow function for email change
         const handleEmailChange = (e) => {
           setEmail(e.target.value);
           validateForm(name, e.target.value);
         };

         // Arrow function for form validation
         const validateForm = (name, email) => {
           const isNameValid = name.length > 0;
           const isEmailValid = /\S+@\S+\.\S+/.test(email);
           setIsValid(isNameValid && isEmailValid);
         };

         // Arrow function for form submission
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
       };

       export default ControlledForm;

       // This example shows:
       // 1. The main component as an arrow function (ControlledForm)
       // 2. Event handlers as arrow functions (handleNameChange, handleEmailChange, handleSubmit)
       // 3. Helper functions as arrow functions (validateForm)
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
       const Button = () => {
         // Define an arrow function to handle the click event
         const handleClick = () => {
           alert('Button was clicked!');
         };

         // Return a button element with the onClick event handler
         return <button onClick={handleClick}>Click me</button>;
       };
       ```

   - Conditional Rendering:
     - Showing different content based on certain conditions
     - Uses regular JavaScript if statements or ternary operators
     - Example:
       ```jsx:src/components/Greeting.js
       const Greeting = ({ isLoggedIn }) => {
         // Use a ternary operator for conditional rendering
         return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
       };
       ```

5. Lists and keys

   - Rendering Lists:

     - How to display multiple similar items in React
     - Use JavaScript's map() function to create lists of elements
     - Example:
       ```jsx:src/components/FruitList.js
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
       ```

   - Keys:
     - Special attributes that help React keep track of list items
     - Should be unique among siblings (items in the same list)
     - Help React update lists efficiently
     - Usually, use IDs from your data as keys
     - If you don't have stable IDs, you can use the item index as a last resort:
       ```jsx:src/components/NumberList.js
       const NumberList = () => {
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
       };
       ```
     - Note: Using index as keys can cause issues if your list order changes

6. Project: Simple todo list app
   - Apply the concepts learned in days 1-5
   - Create a basic todo list application
   - Features: Add tasks, mark tasks as complete, delete tasks

Rendering examples in App.js:
To see these examples in action, you can import and use them in your src/App.js file. Here's how you might structure your App.js to showcase the examples from days 1-5:
