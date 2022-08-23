import { useState } from "react";

const SimpleInput = (props) => {
  // get input value with usestate
  // if you need to reset, usestate works ref does not. 
  const [enteredName, setEnteredName] = useState('');

  // basic validation states
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // the state is being updated here >>> but
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // cleaning up the field
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name cannot be empty duh</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
