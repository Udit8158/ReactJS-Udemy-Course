import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredValueValid = validationFunc(enteredValue);
  const hasError = inputTouched && !enteredValueValid;

  const changeInputHandler = (event) => {
    setEnteredValue(event.target.value);
    setInputTouched(true);
  };

  const blurInputHandler = (event) => {
    setInputTouched(true);
  };

  const resetForm = () => {
    setEnteredValue("");
    setInputTouched(false);
  };
  return {
    enteredValue,
    inputTouched,
    enteredValueValid,
    setEnteredValue,
    setInputTouched,
    hasError,
    changeInputHandler,
    blurInputHandler,
    resetForm,
  };
};

export default useInput;
