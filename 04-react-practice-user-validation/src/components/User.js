import React from "react";

function User(props) {
  const { name, age } = props;
  return (
    <div>
      <h2>
        {name} ({age} years old)
      </h2>
    </div>
  );
}

export default User;
