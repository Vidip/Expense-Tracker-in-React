import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const selectYearHandler = (yearValue) => {
    setYear(yearValue);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() == year;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onSelectFilter={selectYearHandler}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
