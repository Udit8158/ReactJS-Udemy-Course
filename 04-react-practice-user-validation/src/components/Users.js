import React from "react";
import Card from "./Card";
import User from "./User";
import styles from "./Users.module.css";

function Users(props) {
  const { users } = props;

  return (
    <Card className={styles["users-container"]}>
      {users.length == 0 ? (
        <h2>No users to show !</h2>
      ) : (
        users.map((user) => {
          return <User name={user.name} age={user.age} key={user.id} />;
        })
      )}
    </Card>
  );
}

export default Users;
