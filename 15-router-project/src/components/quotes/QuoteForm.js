import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  async function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const enteredData = {
      text: enteredText,
      author: enteredAuthor,
    };

    // optional: Could validate here

    // Sending data to firebase

    await fetch(
      "https://react-http-request-26266-default-rtdb.firebaseio.com/quotes.json",
      {
        method: "POST",
        body: JSON.stringify(enteredData),
      }
    );

    // console.log("DONE");

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFocusHandler = () => setIsEntering(true);
  const onClickHandler = () => setIsEntering(false);

  return (
    <>
      <Prompt
        when={isEntering}
        message="Are you sure ? Your entered data will be gone..."
      />
      <Card>
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={onClickHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
