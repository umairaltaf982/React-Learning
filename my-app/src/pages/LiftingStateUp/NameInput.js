const NameInput = ({ name, onNameChange }) => {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
      placeholder="Enter your name"
    />
  );
};

export default NameInput;
