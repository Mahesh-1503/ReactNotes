import './App.css';
import EventHandlingExample1 from './EventHandlingExample1';
import BasicControlledInput from './BasicControlledInput';
import MultipleControlledInputs from './MultipleControlledInputs';
import TextareaAndSelect from './TextareaAndSelect';
import FormWithValidation from './FormWithValidation';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BasicControlledInput />
      <MultipleControlledInputs />
      <TextareaAndSelect />
      <FormWithValidation />
      <EventHandlingExample1 />
    </div>
  );
}

export default App;