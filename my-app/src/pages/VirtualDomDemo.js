import React, { useState } from 'react';

const VirtualDomDemo = () => {
  const [text, setText] = useState("Hello, Virtual DOM!");

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText("Text Updated!")}>Update Text</button>
    </div>
  );
};

export default VirtualDomDemo;
