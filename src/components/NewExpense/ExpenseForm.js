import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [title, setTile] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    //setUserInput({
    //  ...userInput,
    //  title: event.target.value,
    //});
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    //setUserInput({
    // ...userInput,
    //  amount: event.target.value,
    //});
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput, date: new Date(userInput.date) };
    props.onSaveExpenseData(expenseData);

    setUserInput((prevState) => {
      return { ...prevState, title: "", amount: "", date: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
