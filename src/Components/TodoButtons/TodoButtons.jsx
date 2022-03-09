import "./TodoButtons.scss";

function Buttons({ text, type = "submit", variant }) {
  return (
    <button className={`buttons ${variant}`} type={type}>
      {text}
    </button>
  );
}

export default Buttons;
