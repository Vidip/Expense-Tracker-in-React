import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Filter/ExpenseFilter";

const initialExpenses = [
  { title: "Car Insurance", amount: 294, date: new Date(2021, 2, 38) },
  { title: "Car Insurance2 ", amount: 94, date: new Date(2021, 2, 3) },
  { title: "Car Insurance3 ", amount: 94, date: new Date(2020, 2, 3) },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
