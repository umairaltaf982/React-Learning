import React, { useRef, useEffect } from 'react';

const RefExample = () => {
  const inputRef = useRef(null); // Create ref

  useEffect(() => {
    inputRef.current.focus(); // Access DOM directly
  }, []);

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input ref={inputRef} type="text" placeholder="Auto focus input" />
    </div>
  );
};

export default RefExample;
