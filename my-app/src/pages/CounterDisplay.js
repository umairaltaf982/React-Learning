import React from 'react';

const CounterDisplay = ({ count }) => {
  console.log("CounterDisplay rendered");
  return <h3>Count: {count}</h3>;
};

export default React.memo(CounterDisplay);
