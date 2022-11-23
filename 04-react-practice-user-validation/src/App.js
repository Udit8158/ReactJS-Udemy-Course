import { useState } from "react";
import Form from "./components/Form";
import InvalidBox from "./components/InvalidBox";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  // console.log(users);

  // Validation states for users
  const [isValid, setIsValid] = useState(true);
  const [invalidMsg, setInvalidMsg] = useState("");

  // Getting users data form the form component
  const userDataHandler = (data) => setUsers(data);

  return (
    <>
      <Form
        userDataHandler={userDataHandler}
        isValid={isValid}
        setIsValid={setIsValid}
        setInvalidMsg={setInvalidMsg}
      />
      {!isValid && (
        <InvalidBox invalidMsg={invalidMsg} setIsValid={setIsValid} />
      )}
      <Users users={users} setIsValid={setIsValid} />
    </>
  );
}

export default App;
