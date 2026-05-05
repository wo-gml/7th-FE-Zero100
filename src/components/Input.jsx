const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="todo-input"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;