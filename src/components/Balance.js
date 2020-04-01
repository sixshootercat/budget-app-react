import React from "react";

const Balance = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className="alert">Expenses: ${remaining}</div>
    </>
  );
};

export default Balance;
