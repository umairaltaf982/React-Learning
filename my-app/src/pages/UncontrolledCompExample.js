import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
