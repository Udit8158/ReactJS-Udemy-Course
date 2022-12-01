import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isSixChar = (value) => value.trim().length === 6;

  const confirmHandler = (event) => {
    event.preventDefault();

    let enteredName = nameInputRef.current.value;
    let enteredStreet = streetInputRef.current.value;
    let enteredPostal = postalInputRef.current.value;
    let enteredCity = cityInputRef.current.value;

    const nameValid = !isEmpty(enteredName);
    const streetValid = !isEmpty(enteredStreet);
    const postalValid = isSixChar(enteredPostal);
    const cityValid = !isEmpty(enteredCity);

    setFormValidity({
      name: nameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid,
    });

    const formValid = nameValid && streetValid && postalValid && cityValid;

    if (!formValid) {
      return;
    }

    // sending data
    props.onConformed({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });

    console.log("SUCCESSFULL");
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Enter valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Enter valid street name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Enter valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Enter valid city name</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
