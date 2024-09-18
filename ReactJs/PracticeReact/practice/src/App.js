import React from 'react';
import './App.css';
import BasicControlledInput from './BasicControlledInput';
import MultipleControlledInputs from './MultipleControlledInputs';
import TextareaAndSelect from './TextareaAndSelect';
import FormWithValidation from './FormWithValidation';
import EventHandlingExample1 from './EventHandlingExample1';


function App() {
  return (
    <div className="App">
      <BasicControlledInput />
      <MultipleControlledInputs />
      <TextareaAndSelect />
      <FormWithValidation />
      <EventHandlingExample1 />
    </div>
  );
}

export default App;