import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // get input value with usestate
  // if you need to reset, usestate works ref does not. 
  const [enteredName, setEnteredName] = useState('');
  
  // get input value with useRef
  // useRef is more useful if you only need to check the input value once and not at every key stroke for an automatic validation
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    // get input value with usestate
    console.log(enteredName);

    // get input value with useRef
    console.log(nameInputRef.current.value);
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>

        {/* get input value with usestate*/}
        <input type='text' id='name' onChange={nameInputChangeHandler} />

        {/* get input value with useRef*/}
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
