const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 squeare text-sm transition"
    >
      {text}
    </button>
  );
};

export default Button;
