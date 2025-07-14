import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <CounterDisplay count={count} />

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ParentComponent;
