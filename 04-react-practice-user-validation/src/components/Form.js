import React, { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css";

const Form = (props) => {
  // gettinga users from local storage and set them in state
  let usersArr = JSON.parse(localStorage.getItem("users"));

  if (usersArr === null) {
    usersArr = [];
    localStorage.setItem("users", JSON.stringify(usersArr));
  }
  const [users, setUsers] = useState(usersArr);
  // console.log(users);

  // onchange handlers
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onChangeName = (event) => setUserName(event.target.value);

  const onChangeAge = (event) => setUserAge(event.target.value);

  const addUser = () => {
    // Not add invalid information. Adding users validation
    if (userName.trim().length == 0 || userAge.trim().length == 0) {
      console.log("Please enter valid information");
      props.setIsValid(false);
      props.setInvalidMsg("Can't accept blank user name or age");
      return;
    }
    if (userAge <= 0 || userAge >= 100) {
      props.setIsValid(false);
      props.setInvalidMsg("Please give valid user age");
      return;
    }

    // If pass all validation then add user in the storage
    setUsers((prev) => [
      { name: userName, age: userAge, id: Math.random() },
      ...prev,
    ]);
    setUserName("");
    setUserAge("");
  };

  // Agian setting users in the local storage
  localStorage.setItem("users", JSON.stringify(users));

  // sending users data to the app component
  props.userDataHandler(users);

  return (
    <Card className={styles["form-control"]}>
      <div className={styles["input-container"]}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter user name"
          onChange={onChangeName}
          value={userName}
        />
      </div>

      <div className={styles["input-container"]}>
        <label>User Age</label>
        <input
          type="number"
          placeholder="Enter user age"
          onChange={onChangeAge}
          value={userAge}
        />
      </div>

      <button className={styles.btn} onClick={addUser}>
        Add User
      </button>
    </Card>
  );
};

export default Form;
