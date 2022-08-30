
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
  
  const {
    value: enteredEmail,  // obj desctructuring to extract values from the object returned in the hook
    hasError: emailInputHasError, // ': enteredemail' and ': emailInputHasError are ALIASES 
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log('enteredEmailIsValid', enteredEmailIsValid);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // cleaning up the field
    resetNameInput();
    resetEmailInput();
  }
  
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangedHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Name cannot be empty duh</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='email' onBlur={emailBlurHandler} onChange={emailChangedHandler} value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Invalid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
