import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  // State year
  const [filteredYear, setFilteredYear] = useState("2022");

  // Taking year from child expense filter component
  const pickYearData = (yearInput) => {
    setFilteredYear(yearInput);
  };

  // filtered expenses as filtered year.
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.slice(0, 4) === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={pickYearData}
          filteredYear={filteredYear}
        />

        <ExpenseChart filteredExpenses={filteredExpenses} />

        <ExpenseList
          filteredExpenses={filteredExpenses}
          filteredYear={filteredYear}
        />
      </Card>
    </>
  );
};

export default Expenses;
