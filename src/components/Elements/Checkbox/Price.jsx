import PropTypes from "prop-types";

const Price = (props) => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  const { price } = props;
  return (
    <span className='self-center text-xs font-medium text-primary-purplish-blue'>
      +${price}/{enabled ? "yr" : "mo"}
    </span>
  );
};

Price.propTypes = { price: PropTypes.number.isRequired };

export default Price;
