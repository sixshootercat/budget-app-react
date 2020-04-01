import React from "react";

const ExpenseDetail = ({ expense }) => (
  <li className="expenses">
    <p>
      {expense.name}
      <span className="expense">${expense.amount}</span>
    </p>
  </li>
);

export default ExpenseDetail;
