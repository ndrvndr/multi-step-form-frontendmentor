import PropTypes from "prop-types";

const Label = (props) => {
  const { label, price } = props;
  return (
    <div className="ml-4">
      <div className="font-bold">{label}</div>
      <div>{price}</div>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Label;
