import React from "react";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses-realized">
      <h2>List</h2>
      {expenses.map(expense => (
        <ExpenseDetail key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
