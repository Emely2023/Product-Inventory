const ButtonDelete = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
    >
      {text}
    </button>
  );
};

export default ButtonDelete;
