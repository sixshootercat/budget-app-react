import React, { useState } from 'react';
import Error from './Error';

const BudgetInput = ({ setBudget, setRemaining, setShowBudgetInput }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Validate info
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }

    // Reset error after validation to proceed
    setError(false);

    // If it passes validation, set budget and amount states to render in App
    setBudget(amount);
    setRemaining(amount);

    // Set budget input to false so it doesn't render
    setShowBudgetInput(false);
  };

  const handleChange = e => {
    setAmount(parseInt(e.target.value, 10));
  };

  return (
    <>
      <h2>What's your budget</h2>
      {error ? <Error msg='There was an error' /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          className='u-full-width'
          placeholder="What's your budget?"
          onChange={handleChange}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Submit'
        />
      </form>
    </>
  );
};

export default BudgetInput;
