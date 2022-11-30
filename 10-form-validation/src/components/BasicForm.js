import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    changeInputHandler: firstNameChangeHandler,
    blurInputHandler: firstNameBlurHandler,
    enteredValueValid: enteredFirstNameValid,
    hasError: enteredFirstNameInvalid,
    setInputTouched: setFirstNameTouched,
    resetForm: resetFirstName,
  } = useInput((val) => val.trim() !== "");
  const {
    enteredValue: enteredLastName,
    changeInputHandler: lastNameChangeHandler,
    blurInputHandler: lastNameBlurHandler,
    enteredValueValid: enteredLastNameValid,
    hasError: enteredLastNameInvalid,
    setInputTouched: setLastNameTouched,
    resetForm: resetLastName,
  } = useInput((val) => val.trim() !== "");
  const {
    enteredValue: enteredEmail,
    changeInputHandler: emailChangeHandler,
    blurInputHandler: emailBlurHandler,
    enteredValueValid: emailValid,
    hasError: enteredEmailInvalid,
    setInputTouched: setEmailTouched,
    resetForm: resetEmail,
  } = useInput((val) => val.trim() !== "" && val.includes("@"));

  const formValid = enteredFirstNameValid && enteredLastNameValid && emailValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setFirstNameTouched(true);
    setLastNameTouched(true);
    setEmailTouched(true);

    if (!formValid) {
      console.log("Failed");
      return;
    }

    console.log({
      name: enteredFirstName + " " + enteredLastName,
      email: enteredEmail,
    });

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = !enteredFirstNameInvalid
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !enteredLastNameInvalid
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !enteredEmailInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameInvalid && (
            <p className="error-text">Not a valid first name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameInvalid && (
            <p className="error-text">Not a valid last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailInvalid && <p className="error-text">Not a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
