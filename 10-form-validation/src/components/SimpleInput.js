import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueValid: isEnteredNameValid,
    hasError: isEnteredNameInvalid,
    setInputTouched: setIsEnteredNameTouched,
    changeInputHandler: changeInputNameHandler,
    blurInputHandler: blurInputNameHandler,
    resetForm: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueValid: isEnteredEmailValid,
    hasError: isEnteredEmailInvalid,
    setInputTouched: setIsEnteredEmailTouched,
    changeInputHandler: changeInputEmailHandler,
    blurInputHandler: blurInputEmailHandler,
    resetForm: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsEnteredNameTouched(true);
    setIsEnteredEmailTouched(true);

    if (!isEnteredNameValid || !isEnteredEmailValid) {
      console.log("FAILED");
      return;
    }

    console.log({ name: enteredName, email: enteredEmail });

    resetName();
    resetEmail();
  };

  const inputNameClasses = isEnteredNameInvalid
    ? "form-control invalid"
    : "form-control";
  const inputEmailClasses = isEnteredEmailInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeInputNameHandler}
          onBlur={blurInputNameHandler}
          value={enteredName}
        />
        {isEnteredNameInvalid && <p>Not Valid Name</p>}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Name</label>
        <input
          type="email"
          id="email"
          onChange={changeInputEmailHandler}
          onBlur={blurInputEmailHandler}
          value={enteredEmail}
        />
        {isEnteredNameInvalid && <p>Not Valid Email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
