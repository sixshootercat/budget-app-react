import React, { useState } from "react";
import uuid from "uuid/v1";
import Error from "./Error";

const Form = ({ setExpense, setAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Validate info
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      setError(true);
      return;
    }

    // Reset Error after validation to proceed
    setError(false);

    const expense = {
      name,
      amount,
      id: uuid()
    };

    // Sends new expense to App
    setExpense(expense);

    setAddExpense(true);

    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your expenses</h2>
      {error ? (
        <Error msg="Both fields are required or incorrect number" />
      ) : null}
      <div className="field">
        <label>Expense Name</label>
        <input
          value={name}
          type="text"
          className="u-full-width"
          placeholder="Ex. Bills"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Expense Amount</label>
        <input
          value={amount}
          type="number"
          className="u-full-width"
          placeholder="Ex. 300"
          onChange={e => setAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

export default Form;
