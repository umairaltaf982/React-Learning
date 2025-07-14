import React, { useState } from 'react';
import NameInput from './NameInput';
import NameDisplay from './NameDisplay';

const LiftingStateUp = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Lifting State Up Demo</h2>
      <NameInput name={name} onNameChange={setName} />
      <NameDisplay name={name} />
    </div>
  );
};

export default LiftingStateUp;
