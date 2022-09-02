import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  // Hard coded some expensed
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const [expenses, setExpenses] = useState([]);

  // Taking inputData from the NewExpenseFile
  const takeFormDataHandler = (expenceDataByUser) => {
    // setExpenses([expenceDataByUser, ...expenses]);

    // TODO: WHEN YOUR RETURNIG STATE IS DEPEND ON PREVIOUS STATE THEN YOU SHOULD DO IT LIKE THIS...
    setExpenses((prevExpenses) => [expenceDataByUser, ...prevExpenses]);
  };
  return (
    <>
      <NewExpense onTakeSubmitFormData={takeFormDataHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
