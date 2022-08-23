
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { value: enteredName,  // obj desctructuring to extract values from the object returned in the hook
          hasError: nameInputHasError, // ': enteredName' and ': nameInputHasError are ALIASES 
          isValid: enteredNameIsValid,
          valueChangeHandler: nameChangedHandler,
          inputBlurHandler: nameBlurHandler,
          reset: resetNameInput
        } = useInput(value => value.trim() !== ''); // value => value.trim() !== '' is executed in the use-input hook when we call >> validateValue(enteredValue)
            // the *value* here is the enteredValue of the hook  (passing a function as a value to another function)
  
  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    // cleaning up the field
    resetNameInput();
  }
  
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangedHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Name cannot be empty duh</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
