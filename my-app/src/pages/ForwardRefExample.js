import React, { useRef } from 'react';

// ForwardRef input component
const InputBox = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Forwarded input" />;
});

// Parent component
const ForwardRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input inside child
  };

  return (
    <div>
      <h2>Forward Ref Demo</h2>
      <InputBox ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ForwardRefExample;
