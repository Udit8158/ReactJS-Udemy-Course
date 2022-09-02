import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // Taking form data from the ExpenseForm file
  const formDataHandler = (expenseDataByUser) => {
    const expenseData = {
      ...expenseDataByUser,
      id: Math.random().toString(),
    };
    // If is for giving data to App.js
    props.onTakeSubmitFormData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormDataSubmit={formDataHandler} />
    </div>
  );
};

export default NewExpense;
