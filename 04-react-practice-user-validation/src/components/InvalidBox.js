import React from "react";
import Card from "./Card";
import styles from "./InvalidBox.module.css";

function InvalidBox(props) {
  const removeBox = () => {
    props.setIsValid(true);
  };
  return (
    <Card className={styles["invalid-box"]}>
      <div className={styles.heading}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles.message}>
        <p>{props.invalidMsg}</p>
      </div>
      <button className={styles.btn} onClick={removeBox}>
        Okay
      </button>
    </Card>
  );
}

export default InvalidBox;
