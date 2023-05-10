import PropTypes from "prop-types";

const NavigationButton = (props) => {
  const { label, bgColor, textColor } = props;
  return (
    <button className={`${bgColor} ${textColor} px-4 py-3 rounded-[4px]`}>
      {label}
    </button>
  );
};

NavigationButton.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default NavigationButton;
