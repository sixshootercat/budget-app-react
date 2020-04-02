import React from 'react';

const Balance = ({ budget, remaining }) => {
  return (
    <>
      <div className='alert alert-primary'>Budge: ${budget}</div>
      <div className='alert'>Remaining: ${remaining}</div>
    </>
  );
};

export default Balance;
