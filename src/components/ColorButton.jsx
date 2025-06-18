import PropTypes from 'prop-types';

const ColorButton = (props) => {
  const handleColorButtonClicked = (color) => {
    props.colorButtonClicked(color);
  };

  return (
    <section>
      {/* If props.firstPerson is falsy (null, undefined, "", 0, false), it will fall back to "Unknown". */}
      <p id='Vladimir' className={props.color}>{`${props.person || 'Unknown'}'s color:`}</p>
      <button onClick={() => handleColorButtonClicked('red')}>🔴</button>
      <button onClick={() => handleColorButtonClicked('orange')} >🟠</button>
      <button onClick={() => handleColorButtonClicked('yellow')}>🟡</button>
      <button onClick={() => handleColorButtonClicked('green')}>🟢</button>
      <button onClick={() => handleColorButtonClicked('blue')}>🔵</button>
      <button onClick={() => handleColorButtonClicked('purple')}>🟣</button>
    </section>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  colorButtonClicked: PropTypes.func.isRequired,
};

export default ColorButton;

