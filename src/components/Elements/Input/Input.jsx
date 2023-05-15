import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-md border border-solid px-5 py-3 outline-none"
      name={name}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
