import Card from "../UI/Card";
import "./ExpenseItemDate.css";

// It is the calender type date which is actually inside expense item
const ExpenseItemDate = (props) => {
  // Set day moth and yeard in readable format

  const dateInObj = new Date(props.date)
  const day = dateInObj.toLocaleString("en-US", { day: "2-digit" });
  const year = dateInObj.getFullYear();
  const month = dateInObj.toLocaleString("en-US", { month: "long" });

  return (
    <Card className="expense-item-date">
      <span className="expense-item-date__month">{month}</span>
      <span className="expense-item-date__year">{year}</span>
      <span className="expense-item-date__day">{day}</span>
    </Card>
  );
};

export default ExpenseItemDate;
