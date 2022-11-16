import "./Card.css";

// This wrpped component for simplifying UI. It is actually a div with style like a rounded corner card
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
