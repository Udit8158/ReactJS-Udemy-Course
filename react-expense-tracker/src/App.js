import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  // Local storage implementation
  let expenesesArr = JSON.parse(localStorage.getItem("expenses"));

  if (!expenesesArr) {
    expenesesArr = [];
    localStorage.setItem("expenses", JSON.stringify(expenesesArr));
  }

  const [expenses, setExpenses] = useState(expenesesArr);

  // Taking inputData from the NewExpenseFile
  const takeFormDataHandler = (expenceDataByUser) => {
    // setExpenses([expenceDataByUser, ...expenses]);

    // TODO: WHEN YOUR RETURNIG STATE IS DEPEND ON PREVIOUS STATE THEN YOU SHOULD DO IT LIKE THIS...
    setExpenses((prevExpenses) => [expenceDataByUser, ...prevExpenses]);

    // localStorage.setItem("expenses", JSON.stringify(expenses));
  };
  return (
    <>
      <NewExpense onTakeSubmitFormData={takeFormDataHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
