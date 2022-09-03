import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // Taking form data from the ExpenseForm file
  const formDataSubmitHandler = (expenseDataByUser) => {
    const expenseData = {
      ...expenseDataByUser,
      id: Math.random().toString(),
    };
    // If is for giving data to App.js
    props.onTakeSubmitFormData(expenseData);

    setIsFormSectionOpened(false);
  };

  // Managing Form section hide or shown

  const [isFormSectionOpened, setIsFormSectionOpened] = useState(false);
  const openFormHandler = () => setIsFormSectionOpened(true);
  const hideFormHandler = () => setIsFormSectionOpened(false);

  return (
    <div className="new-expense">
      {/* Displaying form by condition of clicking on the button */}
      {!isFormSectionOpened && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}

      {isFormSectionOpened && (
        <ExpenseForm
          onFormDataSubmit={formDataSubmitHandler}
          hideFormHandler={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
