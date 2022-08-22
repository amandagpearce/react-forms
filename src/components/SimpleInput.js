import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // get input value with usestate
  // if you need to reset, usestate works ref does not. 
  const [enteredName, setEnteredName] = useState('');

  // basic validation states
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  // get input value with useRef
  // useRef is more useful if you only need to check the input value once and not at every key stroke for an automatic validation
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    // get input value with usestate
    console.log(enteredName);

    // get input value with useRef
    console.log(nameInputRef.current.value);

    // basic validation
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name cannot be empty duh</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
