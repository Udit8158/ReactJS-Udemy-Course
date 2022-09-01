import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

// It is every expense item
const ExpenseItem = (props) => {
  // Taking data form props (expense)
  const { title, amount, date } = props.expense;

  // // using usestate for changing title text
  // const [titleText, setTitleText] = useState(title);

  // // Testing function for onclik on the button
  // const clickHandler = () => {
  //   console.log("1: ", titleText);
  //   setTitleText("New Title");
  //   console.log("2: ", titleText);
  // };

  // const anotherHandler = () => {
  //   console.log("3: ", titleText);
  //   setTitleText("Updated Again");
  //   console.log("4: ", titleText);
  // };

  return (
    <Card className="expense-item">
      <div className="expense-item__left-container">
        <ExpenseItemDate date={date} />
        <h2 className="expense-item__title">{title}</h2>
      </div>
      <div className="expense-item__amount">
        <p>{amount} $</p>
      </div>
    </Card>
  );
};

export default ExpenseItem;
