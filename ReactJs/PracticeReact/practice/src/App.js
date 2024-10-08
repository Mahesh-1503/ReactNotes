import React from 'react';
import './App.css';
import BasicControlledInput from './components/BasicControlledInput';
import MultipleControlledInputs from './components/MultipleControlledInputs';
import TextareaAndSelect from './components/TextareaAndSelect';
import FormWithValidation from './components/FormWithValidation';
import EventHandlingExample1 from './components/EventHandlingExample1';
import EventHandlingExample2 from './components/EventHandlingExample2';
import EventHandlingExample3 from './components/EventHandlingExample3';
import EventHandlingExample4 from './components/EventHandlingExample4';
import EventHandlingExample5 from './components/EventHandlingExample5';
import FruitList from './components/FruitList';


function App() {
  return (
    <div className="App">
      
      <BasicControlledInput />
      
      <MultipleControlledInputs />
      
      <TextareaAndSelect />
      
      <FormWithValidation />

      <EventHandlingExample1 />

      <EventHandlingExample2 />

      <EventHandlingExample3 />

      <EventHandlingExample4 />

      <EventHandlingExample5 />

      <FruitList />  

      
    </div>
  );
}

export default App;