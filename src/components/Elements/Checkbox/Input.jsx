import PropTypes from "prop-types";

const Input = ({ isClicked, handleClick }) => {
  return (
    <input
      type="checkbox"
      checked={isClicked}
      onChange={handleClick}
      className="mr-5 w-5"
    />
  );
};

Input.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
