import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return (
      <p className="conditional-para">
        You do not have any expenses on {props.filteredYear}
      </p>
    );
  } else {
    return props.filteredExpenses.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }
};

export default ExpenseList;
