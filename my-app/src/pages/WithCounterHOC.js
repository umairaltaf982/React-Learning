import React, { useState } from 'react';

// HOC function
const withCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  };
};

// First Component using HOC
const ClickCounter = ({ count, increment }) => {
  return <button onClick={increment}>Clicked {count} times</button>;
};

// Second Component using same logic
const HoverCounter = ({ count, increment }) => {
  return <h3 onMouseOver={increment}>Hovered {count} times</h3>;
};

// Wrapping Components with HOC
export const EnhancedClickCounter = withCounter(ClickCounter);
export const EnhancedHoverCounter = withCounter(HoverCounter);
