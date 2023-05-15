import PropTypes from "prop-types";

const Label = (props) => {
  const { label, price } = props;
  return (
    <div className="ml-4 space-y-2">
      <div className="font-medium">{label}</div>
      <div className="text-sm text-neutral-cool-gray">{price}</div>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Label;
