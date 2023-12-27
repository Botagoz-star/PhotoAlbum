export const Button = ({ handleClick, id, btnName }) => {
    return (
      <button
        onClick={() => (id ? handleClick(id) : handleClick())}
        className="button"
      >
        {btnName}
      </button>
    );
  };