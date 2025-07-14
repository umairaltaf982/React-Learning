import React, { useState, useEffect } from 'react';

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);

  // Side effect: update the browser tab title
  useEffect(() => {
    document.title = `Clicked ${count} times`;

    return () => {
      console.log("Cleanup before next effect or unmount");
    };
  }, [count]); // Runs only when count changes

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffectCounter;
