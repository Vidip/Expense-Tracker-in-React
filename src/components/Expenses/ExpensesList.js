import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-List">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
