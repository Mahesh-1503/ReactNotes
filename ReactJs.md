# 30-Day React JS Course

This course is designed to take you from React basics to advanced concepts through practical learning and projects.

## Week 1: Basics

1. Introduction to React, JSX, and components
   - What is React?
     * A popular JavaScript library for building user interfaces
     * Makes it easier to create interactive web applications
     * Developed by Facebook, now used by many companies
   
   - JSX (JavaScript XML)
     * A special syntax that looks like HTML but is actually JavaScript
     * Allows you to write HTML-like code in your JavaScript files
     * Makes your React code easier to read and write
   
   - Components
     * Building blocks of React applications, like LEGO pieces
     * Reusable pieces of code that define parts of your user interface
     * Two types: Functional (newer, simpler) and Class (older, more complex)
     * Example of a simple functional component:
       ```jsx:src/components/Greeting.js
       // Define a functional component called Greeting
       function Greeting() {
         // Return a JSX element (an h1 tag with some text)
         return <h1>Hello, React Beginner!</h1>;
       }
       ```

2. Setting up a React environment
   - Tools you'll need:
     * Node.js: A JavaScript runtime (like a special program to run JavaScript)
     * npm: Node Package Manager (comes with Node.js, helps install React tools)
     * A code editor: Like Visual Studio Code (VS Code) or Sublime Text
   
   - Creating your first React project:
     * We'll use a tool called Create React App (CRA) to set everything up
     * Open your computer's terminal or command prompt and type:
       ```bash
       # Create a new React app named "my-first-react-app"
       npx create-react-app my-first-react-app
       # Change directory to the newly created app folder
       cd my-first-react-app
       # Start the development server
       npm start
       ```
     * This creates a new folder with all the files you need to start coding
   
   - Understanding your new React project:
     * src/ folder: Where you'll write your React code
     * public/ folder: For static files like images
     * package.json: Lists your project's dependencies (other code it needs)
   
   - Running your React app:
     * In the terminal, type `npm start` to run your app
     * Open a web browser and go to http://localhost:3000 to see your app

3. Props and state
   - Props (short for Properties):
     * A way to pass data from a parent component to a child component
     * Like passing arguments to a function
     * Example:
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
     * A way for a component to manage its own data
     * When state changes, React automatically updates the component
     * Example using the useState hook:
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
       ```

   - Key differences:
     * Props are passed down from parent to child, state is managed within a component
     * Props shouldn't be changed by the component that receives them
     * State can be updated by its own component

4. Handling events and conditional rendering
   - Handling Events:
     * How your app responds to user actions like clicks or key presses
     * In React, you use camelCase for event names (e.g., onClick, onSubmit)
     * Example:
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
     * Showing different content based on certain conditions
     * Uses regular JavaScript if statements or ternary operators
     * Example:
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
     * How to display multiple similar items in React
     * Use JavaScript's map() function to create lists of elements
     * Example:
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
     * Special attributes that help React keep track of list items
     * Should be unique among siblings (items in the same list)
     * Help React update lists efficiently
     * Usually, use IDs from your data as keys
     * If you don't have stable IDs, you can use the item index as a last resort:
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
     * Note: Using index as keys can cause issues if your list order changes

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
