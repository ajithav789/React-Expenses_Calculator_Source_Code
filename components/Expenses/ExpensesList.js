import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        <p>No expenses found</p>
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenseElements) => (
        <ExpenseItem
          key={expenseElements.id}
          title={expenseElements.title}
          amount={expenseElements.amount}
          date={expenseElements.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
