import PropTypes from "prop-types";

const Price = (props) => {
  const { price } = props;
  return (
    <span className="self-center text-xs font-medium text-primary-purplish-blue">
      {price}
    </span>
  );
};

Price.propTypes = { price: PropTypes.string.isRequired };

export default Price;
