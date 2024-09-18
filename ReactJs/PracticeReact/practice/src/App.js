import React from 'react';
import './App.css';
import BasicControlledInput from './components/BasicControlledInput';
import MultipleControlledInputs from './components/MultipleControlledInputs';
import TextareaAndSelect from './components/TextareaAndSelect';
import FormWithValidation from './components/FormWithValidation';
import EventHandlingExample1 from './components/EventHandlingExample1';
import EventHandlingExample2 from './components/EventHandlingExample2';


function App() {
  return (
    <div className="App">
      <BasicControlledInput />
      <MultipleControlledInputs />
      <TextareaAndSelect />
      <FormWithValidation />{/*one more example of form with validation left look into it later after week 3 */}
      <EventHandlingExample1 />
      <EventHandlingExample2 />
    </div>
  );
}

export default App;