import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

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

  // Expenses returned element  (Approach 3)

  let expensesElement = (
    <p className="conditional-para">
      You do not have any expenses on {filteredYear}
    </p>
  );

  if (filteredExpenses.length > 0) {
    expensesElement = filteredExpenses.map((expense) => {
      return <ExpenseItem expense={expense} key={expense.id} />;
    });
  }
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={pickYearData}
          filteredYear={filteredYear}
        />
        {/*  TODO:   Approach 1 */}
        {/* {filteredExpenses.length === 0 ? (
          <p className="conditional-para">
            You do not have any expenses on {filteredYear}
          </p>
        ) : (
          filteredExpenses.map((expense) => {
            return <ExpenseItem expense={expense} key={expense.id} />;
          })
        )} */}
        {/* TODO:  Approach 2 */}
        {/* {filteredExpenses.length === 0 && (
          <p className="conditional-para">
            You do not have any expenses on {filteredYear}
          </p>
        )}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return <ExpenseItem expense={expense} key={expense.id} />;
          })} */}

        {/*  TODO: For approach 3 */}
        {expensesElement}
      </Card>
    </>
  );
};

export default Expenses;
