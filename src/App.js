import React, { useState, useEffect } from "react";
import BudgetInput from "./components/BudgetInput";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showBudgetInput, setShowBudgetInput] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [addExpense, setAddExpense] = useState(false);

  useEffect(() => {
    //Adds new expense from form comp
    if (addExpense) {
      setExpenses([...expenses, expense]);

      // Subtract from current budget
      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget);

      setAddExpense(false);
    }
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="main-container contenido">
          {showBudgetInput ? (
            <BudgetInput
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowBudgetInput={setShowBudgetInput}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setAddExpense={setAddExpense} />
              </div>
              <div className="one-half column">
                <ExpenseList expenses={expenses} />
                <Balance budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
