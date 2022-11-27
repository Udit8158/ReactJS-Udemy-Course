import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Using object destructring */}
      <input type="text" {...props.input} />
    </div>
  );
};

export default Input;
