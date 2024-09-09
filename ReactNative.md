# React Native Course Curriculum

## Week 1: Foundations of React Native

### Day 1-2: Introduction to React Native
- **Key Concepts**: JSX, components, project setup
- **Hands-On**: Create a simple "Hello, World!" app and a custom component.
- **Practical Task**:
  - Create a functional button to update text dynamically.
  - Understand component structure and reuse.

### Day 3-4: Core Components and Styling
- **Key Concepts**: View, Text, Image, Flexbox, styling
- **Hands-On**: Build a profile page with an image, text, and custom button styles.
- **Practical Task**:
  - Implement Flexbox layout.
  - Add responsiveness for smaller screens.

### Day 5-7: State and Props
- **Key Concepts**: State, props, updating state
- **Hands-On**: Build a counter app with increment, decrement, and reset functionalities.
- **Practical Task**:
  - Show negative numbers.
  - Pass state to a child component.

### Project 1: Todo List App
- **Key Concepts**: Basic components, state, and props
- **Hands-On**: Implement a to-do list app with add, complete, and delete features.
- **Practical Task**:
  - Add validation for empty tasks.
  - Implement task filtering.

## Week 2: Navigation, User Input, and Error Handling

### Day 1-2: React Navigation
- **Key Concepts**: Stack navigation, passing data between screens
- **Hands-On**: Create Home and Details screens; pass data between them.
- **Practical Task**:
  - Implement deep linking for specific screens.

### Day 3-4: Handling User Input
- **Key Concepts**: Forms, TextInput, button presses
- **Hands-On**: Create a login form with basic validation.
- **Practical Task**:
  - Implement real-time validation and a loading spinner.

### Day 5: List Rendering and ScrollView
- **Key Concepts**: FlatList, ScrollView, dynamic lists
- **Hands-On**: Build a scrolling list with FlatList and "pull to refresh".
- **Practical Task**:
  - Dynamically render and edit/delete list items.
  - Handle empty state.

### Day 6: Error Handling
- **Key Concepts**: Error boundaries, try-catch, error messages
- **Hands-On**: Implement try-catch for user input in the to-do app; display error messages.
- **Practical Task**:
  - Create a custom error boundary component.

### Project 2: Recipe App with Error Handling
- **Key Concepts**: Navigation, list rendering, error handling
- **Hands-On**: Build a recipe app with error handling for API requests.
- **Practical Task**:
  - Add error boundaries and a retry button.

## Week 3: API Integration, Gestures, and State Management

### Day 1-2: Fetching Data from APIs
- **Key Concepts**: Fetch, axios, async/await, API response handling
- **Hands-On**: Build a weather app that fetches and displays weather data.
- **Practical Task**:
  - Implement search feature.
  - Handle invalid responses.

### Day 3-4: Context API for Global State Management
- **Key Concepts**: Context API, creating providers, consuming state globally
- **Hands-On**: Extend the weather app to save favorite cities globally.
- **Practical Task**:
  - Add a "favorite" button and display favorites on a separate screen.

### Day 5: Gesture Handling
- **Key Concepts**: react-native-gesture-handler, swipe, drag, tap gestures
- **Hands-On**: Add swipe-to-delete in the Recipe app; implement drag-and-drop feature.
- **Practical Task**:
  - Implement drag-and-drop for rearranging recipe ingredients.

### Day 6-7: Redux for Advanced State Management
- **Key Concepts**: Redux store, actions, reducers
- **Hands-On**: Implement Redux in the weather app for global state management.
- **Practical Task**:
  - Set up Redux persist and integrate Redux DevTools.

### Project 3: Weather App with Redux and Gestures
- **Key Concepts**: State management, gestures, and API integration
- **Hands-On**: Extend the weather app to use Redux and implement swipe gestures.
- **Practical Task**:
  - Implement pagination for weather forecasts.

## Week 4: Advanced Concepts, Animations, and Deployment

### Day 1-2: Persisting Data with AsyncStorage
- **Key Concepts**: AsyncStorage, local persistence
- **Hands-On**: Add persistence to the Recipe app using AsyncStorage.
- **Practical Task**:
  - Implement "Offline Mode" to show saved recipes offline.

### Day 3: Push Notifications with Expo
- **Key Concepts**: Expo push notifications
- **Hands-On**: Add push notifications to the weather app for alerts.
- **Practical Task**:
  - Trigger notifications based on weather conditions.

### Day 4-5: Animations with Reanimated
- **Key Concepts**: react-native-reanimated, animations, transitions
- **Hands-On**: Add animated transitions to the Recipe app.
- **Practical Task**:
  - Create a bounce animation for adding new recipes.

### Day 6: Optimization and Testing
- **Key Concepts**: Performance optimization, unit testing, Jest
- **Hands-On**: Optimize Recipe app performance; write unit tests for the favorite recipe feature.
- **Practical Task**:
  - Implement lazy loading and test error-handling functions with Jest.

### Day 7: Deployment and CI/CD
- **Key Concepts**: CI/CD, Expo for deployment, automated pipelines
- **Hands-On**: Deploy the weather app to Google Play using Expo.
- **Practical Task**:
  - Set up CI/CD pipeline using GitHub Actions.

### Final Project: Weather App with Full Features
- **Objective**: Complete and deploy a full-featured weather app.
- **Hands-On**: Complete the weather app with Redux, animations, and push notifications.
- **Practical Task**:
  - Deploy the app to Google Play Store or App Store.
