import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setaddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredException) => {
    const expenseData = {
      ...enteredException,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setaddExpense(false);
  };

  const addNewExpenseHandler = () => {
    setaddExpense(true);
  };
  const stopEditing = () => {
    setaddExpense(false);
  };
  const renderExpenseForm = () => {
    if (addExpense) {
      return (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
          add
        ></ExpenseForm>
      );
    }
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {renderExpenseForm()}
    </div>
  );
};

export default NewExpense;
