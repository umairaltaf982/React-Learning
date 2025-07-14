import React, { useState, useRef, useEffect } from 'react';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(); // create ref without initial value

  useEffect(() => {
    prevCount.current = count; // update ref after render
  }, [count]); // runs whenever count changes

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default PreviousValue;
