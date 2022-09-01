import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

// It is Expenses container which hold many things
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
