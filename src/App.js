import './App.css';
import CustomMultipleInputs from './Components/CustomMultipleInputs';
import InputFieldSubmit from './Components/InputFieldSubmit';
import InputFocusKeystroke from './Components/InputFocusKeystroke';
import MultipleInputs from './Components/MultipleInputs';

function App() {
  return (
    <div className="App">
      <div className='div'>
        <div>
          <h3>In this Form you can have validations on submiting the form</h3>
          <InputFieldSubmit />
        </div>
        <hr />
        <div>
          <h3>In this Form you can have validations on Focus and every keystrokes in the form</h3>
          <InputFocusKeystroke />
        </div>
      </div> <hr />
      <h3>In this Form you can have validations through multiple inputs of the form</h3>
      <MultipleInputs />
      <hr />
      <h3>In this Form you can have validations through multiple inputs using custom hooks </h3>
      <CustomMultipleInputs />
    </div>
  );
}

export default App;
